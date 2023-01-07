import React , {useEffect, useLayoutEffect, useRef, useState} from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';


const MandaratInputModal = (props) => {

    const [currentMandartInputValue , setCurrentMandaratInputValue] = useState('');
    const writeMantrama = (e) => {
        setCurrentMandaratInputValue(e.target.value);
    }

    const saveMantrama = (e) => {
        e.preventDefault();
        props.onChangeInputElement(props.currentMandaratName , currentMandartInputValue)
        props.closeMandaratInputModal();
    }
    const inputFocus = useRef();

    useLayoutEffect(() => {
        inputFocus.current.focus();
    })

    return (
        <>
            <Modal size="small" show={props.isShow} onHide={props.closeMandaratInputModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4>만다라트 작성</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={saveMantrama}>
                        <Form.Label>만다라트</Form.Label>
                        <Form.Control ref={inputFocus} type="text" placeholder="만다라트 작성" defaultValue={props.currentMandaratValue} onChange={writeMantrama} />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.closeMandaratInputModal}>
                        닫기
                    </Button>
                    <Button onClick={saveMantrama}>
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default MandaratInputModal;