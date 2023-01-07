import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DairyDeletePage = (props) => {

    const [show, setShow] = useState(true);
    const [deleteDairyId, setDeleteDairyId] = useState(props.deletePageDairy.id);
    const handleClose = () => {
        props.isShowDeletePageModal();
    }

    const removeDairy = () => {
        props.removeDairy(deleteDairyId);
        props.isShowDeletePageModal();
    }

    //아이디 넘겨줘얃함

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h4 style={{ textAlign: 'center' }}>"{props.deletePageDairy.subject}"를 삭제하겠습니까? </h4>
                    </Modal.Title>
                </Modal.Header>

                <div style={{ textAlign: 'center' }}>
                    <Button variant="danger" onClick={removeDairy}>
                        삭제
                    </Button>
                    <Button style={{ margin: '5px' }} variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                </div>
            </Modal>
        </>
    );

}

export default DairyDeletePage;