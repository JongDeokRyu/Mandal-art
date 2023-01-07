import React, { useEffect, useState } from 'react';
import { Modal, Button, Form , Row ,Col } from 'react-bootstrap';

const DairyDetailPage = (props) => {

    const [show, setShow] = useState(true);
    const [detailPageDairy, setDetailPageDairy] = useState(props.detailPageDairy);
    const [dairyList, setDairyList] = useState([]);

    const handleClose = () => {
        props.isShowDetailPageModal();
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>View Diary</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label><h3>제목</h3></Form.Label>
                                <Form.Control type="text"
                                 readOnly
                                    defaultValue= {detailPageDairy.subject}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label><h4>작성 날짜</h4></Form.Label>
                                <Form.Control type="date"
                                 readOnly
                                    defaultValue={detailPageDairy.dairyDate}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridTextArea">
                                <Form.Label><h4>다이어리</h4></Form.Label>
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    rows={9}
                                    defaultValue={detailPageDairy.mainText}
                                    readOnly    
                                >
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                    {/* <h5>제목 : {detailPageDairy.subject} </h5><br /><br />
                    <p>내용 : {detailPageDairy.mainText}</p><br />
                    <p>작성날짜 : {detailPageDairy.dairyDate}</p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default DairyDetailPage;