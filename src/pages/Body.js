import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import App from '../App';
import SideBar from '../components/SideBar';
import DairyModal from '../components/DairyModal';
import DairyList from '../components/DairyList';
import DairyDetailPage from '../components/DairyDetailPage';
import DairyTestData from '../components/DairyTestData.json';
import DairyEditPage from '../components/DairyEditPage';
import DairyDeletePage from '../components/DairyDeletePage';
import DairyPagination from '../components/DairyPagination';

import { Button, Table, Dropdown, Pagination } from 'react-bootstrap';

import Main from './main.css';
import BodyCss from './Body.css';
import logo from '../logo.svg';
import { useParams } from 'react-router-dom';


const Body = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [dairyList, setDairyList] = useState([]);

    const [detailShowModal, setDetailShowModal] = useState(false);
    const [detailPageDairy, setDetailPageDairy] = useState('');

    const [showDairyEditPage, setShowDairyEditPage] = useState(false);
    const [editPageDairy, setEditPageDairy] = useState('');

    const [showDairyDeletePage, setShowDairyDeletePage] = useState(false);
    const [deletePageDairy, setDeleteDairyId] = useState('');

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [paginationListCount, setPaginationListCount] = useState(6);

    const [indexOfFirst, setIndexOfFirst] = useState(0);
    const [indexOfLast, setIndexOfLast] = useState(6);

    const showModal = () => {
        setIsModalVisible(true);
    }

    const isShowModal = () => {
        setIsModalVisible(false);
    }

    const addDairy = (dairy) => {
        setDairyList([
            dairy,
            ...dairyList
        ]);
    }

    const isShowDetailPageModal = () => {
        setDetailShowModal(false);
    }

    const isShowEditPageModal = () => {
        setShowDairyEditPage(false);
    }

    const isShowDeletePageModal = () => {
        setShowDairyDeletePage(false);
    }

    const editDairy = (afterEditDairy) => {
        console.log('body afterEditDairy ---> ', afterEditDairy);
        setDairyList(
            dairyList.map((dairy) =>
                dairy.id === afterEditDairy.id ? afterEditDairy : dairy
            )
        )
    }

    const removeDairy = (id) => {
        setDairyList(dairyList.filter(dairy => {
            return dairy.id !== id;
        }));
    };


    const clickPageNumber = (pageNumber) => {
        setCurrentPageNumber(pageNumber)
        setIndexOfLast(pageNumber * paginationListCount);
    }


    useEffect(() => {
        setDairyList([...JSON.parse(localStorage.getItem('DairyTestData'))])
    }, [])

    useEffect(() => {
        localStorage.setItem('DairyTestData', JSON.stringify(dairyList));
        setIndexOfFirst(indexOfLast - paginationListCount);

    }, [dairyList, currentPageNumber, indexOfLast])



    // useEffect(() => {
    //     fetch("https://api.coinpaprika.com/v1/tickers")
    //     .then((response) => console.log('response.json ---> ' , response.json)
    //     )
    // },[])

    // const getCoins = async() => {
    //     const response = await fetch("https://api.coinpaprika.com/v1/tickers");
    //     const json = await response.json();
    //     console.log('json ===> ' , json);
    // }




    return (
        <div>
            <main>
                <div className='Mains App-body'>
                    <div id='Mains-left'>
                        <SideBar></SideBar>
                    </div>
                    <div className='right-body-style tableTest tableTest2' style={{ height: '50vh' }}>
                        <div className='Card-header'>
                            <h2>My Dairy</h2>
                            <Button variant="secondary" className="nextButton Create-Border-Button " onClick={showModal}>
                                New
                            </Button>
                        </div>
                        <div style={{ margin: '3%' }} >
                            {dairyList.length ?
                                <div>
                                    <div style={{ height: '370px' }}>
                                        <Table striped bordered hover variant="dark" >
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Subject</th>
                                                    <th>Create Date</th>
                                                </tr>
                                            </thead>

                                            <tbody >
                                                {dairyList.slice(indexOfFirst, indexOfLast).map((dairy, index) => {
                                                    return (
                                                        <tr key={dairy.id} style={{ height: '1' }}>
                                                            <td style={{ width: '5%' }}>{index + 1}</td>
                                                            <td style={{ cursor: 'pointer', width: '50%' }} onClick={(e) => {
                                                                setDetailPageDairy(dairy)
                                                                setDetailShowModal(true);
                                                            }}>{dairy.subject.length > 20 ? `${dairy.subject.slice(0, 20)}....` : dairy.subject}</td>
                                                            <td style={{ width: '40%' }}>{dairy.saveDate}</td>
                                                            <td style={{ width: '5%' }}>
                                                                <Dropdown style={{ height: '5px' }}>
                                                                    <Dropdown.Toggle size="sm" id="dropdown-button-dark-example1" variant="secondary">
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu variant="dark">
                                                                        <Dropdown.Item
                                                                            eventKey="EditDairy"
                                                                            onClick={(e) => {
                                                                                setEditPageDairy(dairy)
                                                                                setShowDairyEditPage(true)
                                                                            }}
                                                                        >Edit
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item
                                                                            eventKey="DeleteDairy"
                                                                            onClick={(e) => {
                                                                                setShowDairyDeletePage(true)
                                                                                setDeleteDairyId(dairy)
                                                                            }}>Delete</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown></td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <div>
                                        <DairyPagination dairyLength={dairyList.length}
                                            currentPageNumber={currentPageNumber}
                                            paginationListCount={paginationListCount}
                                            clickPageNumber={clickPageNumber}>
                                        </DairyPagination>
                                    </div>
                                </div> : <div style={{ textAlign: 'center' }}>
                                    <br /><br /><br /><br /><br /><br /><br />
                                    <h3>작성된 다이어리가 없습니다.</h3>
                                </div>}
                        </div>
                    </div>
                    {isModalVisible &&
                        <DairyModal
                            isShowModal={isShowModal}
                            addDairy={addDairy}
                            isModalVisible={isModalVisible}>
                        </DairyModal>}
                    {detailShowModal &&
                        <DairyDetailPage
                            detailPageDairy={detailPageDairy}
                            isShowDetailPageModal={isShowDetailPageModal}>
                        </DairyDetailPage>}
                    {showDairyEditPage &&
                        <DairyEditPage
                            editPageDairy={editPageDairy}
                            isShowEditPageModal={isShowEditPageModal}
                            editDairy={editDairy}>
                        </DairyEditPage>}
                    {showDairyDeletePage &&
                        <DairyDeletePage
                            deletePageDairy={deletePageDairy}
                            removeDairy={removeDairy}
                            isShowDeletePageModal={isShowDeletePageModal}>
                        </DairyDeletePage>}
                </div>
            </main>
        </div>
    );
}

export default Body;