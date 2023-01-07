import React, { useEffect, useState } from 'react';
import BorderModalCss from './BorderModal.css'
import BorderInputForm from './BorderInputForm'
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import moment from 'moment';


const DairyModal = (props) => {
    const [show, setShow] = useState(props.isModalVisible);

    const [subjectValue, setSubjectValue] = useState('');
    const [mainTextValue, setMainTextValue] = useState('');
    const [dairyDate, setDairyDate] = useState('');

    const handleClose = () => {
        props.isShowModal();
    };

    const handleSave = () => {
        props.addDairy({
            id: Date.now() + subjectValue,
            subject: subjectValue,
            mainText: mainTextValue,
            dairyDate: dairyDate,
            saveDate: moment().format('YYYY-MM-DD HH:mm:ss')
        })
        props.isShowModal();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Create Dairy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>제목</Form.Label>
                                <Form.Control type="text"
                                    placeholder="제목을 입력하세요."
                                    onChange={(e) => { setSubjectValue(e.target.value) }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>날짜</Form.Label>
                                <Form.Control type="date"
                                    onChange={(e) => { setDairyDate(e.target.value) }}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-1">
                            <Form.Group as={Col} controlId="formGridTextArea">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    placeholder="글을 작성하세요."
                                    rows={9}
                                    onChange={(e) => { setMainTextValue(e.target.value) }} >
                                </Form.Control>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );



}

export default DairyModal;