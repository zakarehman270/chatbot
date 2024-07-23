import React, { useState } from 'react'
import KnowledgeBaseComponent from '@/components/KnowledgeBaseComponents';
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import KnowledgeBase from '@/Forms/KnowledgeBase';
import GeneralModal from '@/common/GeneralModal';

const KnowledgeBaseManagement = () => {
    const [ShowModal, setShowModal] = useState(false)
    function handleClose(params) {
        setShowModal(false)
    }
    // for Add KnowledgeBase
    const [ShowModalKnowledgeBase, setShowModalKnowledgeBase] = useState(false)
    function handleCloseKnowledgeBase(params) {
        setShowModalKnowledgeBase(false)
    }

    return (
        <div className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModalKnowledgeBase} handleClose={handleCloseKnowledgeBase}
                ModalContent={<KnowledgeBase handleClose={handleCloseKnowledgeBase} data={""} />}
                ModalHeader={"Add Knowledge Base"} />
            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-1">
                <CardBody className="p-4">
                    <KnowledgeBaseComponent setShowModalKnowledgeBase={setShowModalKnowledgeBase} />
                </CardBody>
            </Card>
        </div>
    )
}

export default KnowledgeBaseManagement