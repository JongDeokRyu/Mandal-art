import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import logo from '../logo.svg';

const DairyEditPage = (props) => {


    const [show, setShow] = useState(true);
    const [afterEditDairy , setAfterEditDairy] = useState(props.editPageDairy);
    const [editSubjectValue, setEditSubjectValue] = useState(props.editPageDairy.subject);
    const [editMainTextValue, setEditMainTextValue] = useState(props.editPageDairy.mainText);
    const [editdairyDateValue, setEditDairyDateValue] = useState(props.editPageDairy.dairyDate);

    const editDairyButton = () => {
        props.editDairy({
            id : props.editPageDairy.id ,
            subject : editSubjectValue , 
            mainText : editMainTextValue ,
            dairyDate : editdairyDateValue ,
            saveDate: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        props.isShowEditPageModal();
        // console.log('afterEditDairy ---> ' , afterEditDairy);
        // props.editDairy(afterEditDairy);
    }

    const handleClose = () => {
        props.isShowEditPageModal();
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>Edit Dairy</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>제목</Form.Label>
                                <Form.Control type="text"
                                    defaultValue={props.editPageDairy.subject}
                                    onChange={(e) => { setEditSubjectValue(e.target.value) }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>날짜</Form.Label>
                                <Form.Control type="date"
                                    defaultValue={props.editPageDairy.dairyDate}
                                    onChange={(e) => { setEditDairyDateValue(e.target.value) }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridTextArea">
                                <Form.Label>다이어리</Form.Label>
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    rows={9}
                                    defaultValue={props.editPageDairy.mainText}
                                    onChange={(e) => { setEditMainTextValue(e.target.value) }}     
                                >
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={editDairyButton}>
                        수정
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    );
};

export default DairyEditPage;