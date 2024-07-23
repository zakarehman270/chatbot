import { useState } from 'react';
import { Modal } from 'react-bootstrap';

const GeneralModal = ({ show, handleClose, ModalContent, ModalHeader, size }) => {
    return (
        <Modal size={size} show={show} onHide={handleClose}>
            <Modal.Header className='justify-content-between'>
                <Modal.Title>
                    {ModalHeader}
                </Modal.Title>
                <img src="/assets/icons/close.svg" alt="close" className='CloseInModal c_pointer' onClick={() => {
                    handleClose()
                }} />
            </Modal.Header>
            <Modal.Body>{ModalContent}</Modal.Body>
        </Modal>
    )
}

export default GeneralModal