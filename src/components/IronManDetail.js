import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ironManDataList from '../data/data.json';

import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

import {Link} from 'react-router-dom';

const IronManDetail = () => {

    const { id } = useParams();
    const [show, setShow] = useState(true);
    const [selectedIronManPost, setSelectedIronManPost] = useState('');

    useEffect(() => {
        setSelectedIronManPost(...ironManDataList.items.filter(ironManData => {
            return ironManData.id === id;
        }));
    }, [])

    const closeDetailModal = () => {
        window.history.back();
    }

    return (
        <>

            <Modal size="lg" show={show} onHide={closeDetailModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>{selectedIronManPost.title}</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: '1' }}>
                                <img style={{ width: '300px', height: '300px' }} src={selectedIronManPost.image}></img>
                            </div>
                            <div style ={{ display : '1' , marginLeft : '5%'}}>
                                <span><h5>제목 : {selectedIronManPost.title}</h5></span>
                                <span><h5>출연진 : {selectedIronManPost.actor}</h5></span>
                                <span><h5>감독 : {selectedIronManPost.director}</h5></span>
                                <span><h5>출시년도 : {selectedIronManPost.pubDate}</h5></span>
                                <span><h5>평점 : {selectedIronManPost.userRating}</h5></span>
                                <br></br>
                                <span><h6>관련 링크 : {selectedIronManPost.link}</h6></span>
                            </div>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeDetailModal}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default IronManDetail;