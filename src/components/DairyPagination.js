import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
const DairyPagination = (props) => {

    const [pageNumbers, setPageNumbers] = useState([1]);

    const clickPageNumber = (pageNumber) => {
        console.log('clickPageNumber ---> ', pageNumber);
        props.clickPageNumber(pageNumber);
    }

    const clickLastButton = (pageNumber) => {
        props.clickPageNumber(pageNumber);
    }

    useEffect(() => {
        let arrPageNumbers = [];
        for (let i = 1; i <= Math.ceil(props.dairyLength / props.paginationListCount); i++) {
            arrPageNumbers.push(i);
        }
        setPageNumbers(arrPageNumbers);
    }, [props.dairyLength])


    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ margin: '5% auto' }}>
                <Pagination  >
                    <Pagination.First onClick={() => {
                        clickPageNumber(1);
                    }} />

                    {pageNumbers.map((pageNumber) => {
                        return (
                            <>
                                <Pagination.Item key={pageNumber} onClick={(e) => {
                                    clickPageNumber(pageNumber)
                                }}>{pageNumber}
                                </Pagination.Item>
                            </>
                        )
                    })}
                    <Pagination.Last onClick={() => {
                        clickPageNumber(pageNumbers.length)
                    }} />
                </Pagination>
            </div>
        </div>
    )
}

export default DairyPagination;