import React, { useState } from 'react'
import {
    Button,
    Card,
    CardBody,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import AddPolicyTerm from '@/Forms/AddPolicyTerm';
import KnowledgeBase from '@/Forms/KnowledgeBase';
import AddGlossary from '@/Forms/AddGlossary';
import AddFAQ from '@/Forms/AddFAQ';
import FAQComponent from '@/components/FAQComponent';
import PolicyTerms from './PolicyTerms';
import Glossary from '@/components/Glossary';
import KnowledgeBaseComponent from '@/components/KnowledgeBaseComponents';
import Troubleshooting from './Troubleshooting';
import CompanyDetail from './CompanyDetail';

const FAQ = () => {
    const [ActiveTab, setActiveTab] = useState(0)
    // for Add FAQ
    const [ShowModal, setShowModal] = useState(false)
    function handleClose(params) {
        setShowModal(false)
    }
 
    // for Add KnowledgeBase
    const [ShowModalKnowledgeBase, setShowModalKnowledgeBase] = useState(false)
    function handleCloseKnowledgeBase(params) {
        setShowModalKnowledgeBase(false)
    }
    // for Add Glossary
    const [ShowModalGlossary, setShowModalGlossary] = useState(false)
    function handleCloseGlossary(params) {
        setShowModalGlossary(false)
    }

    return (
        <div className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddFAQ handleClose={handleClose} data={""} />}
                ModalHeader={"Add FAQ"} />

           

            <GeneralModal size={"lg"} show={ShowModalKnowledgeBase} handleClose={handleCloseKnowledgeBase}
                ModalContent={<KnowledgeBase handleClose={handleCloseKnowledgeBase} data={""} />}
                ModalHeader={"Add Knowledge Base"} />

            <GeneralModal size={"lg"} show={ShowModalGlossary} handleClose={handleCloseGlossary}
                ModalContent={<AddGlossary handleClose={handleCloseGlossary} data={""} />}
                ModalHeader={"Add Glossary"} />

            <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-1">
                <CardBody className="py-4">
                    <div className='my-2'>
                        <div className='d-flex gap-3 flex-wrap gap-2 justify-content-center '>
                            <Button className={ `${ActiveTab === 0 ? "" : "buttonUnActive text-color"} ` } onClick={() => {
                                setActiveTab(0)
                            }}
                            >
                                FAQ
                            </Button>
                            <Button className={ `${ActiveTab === 1 ? "" : "buttonUnActive text-color"} ` } onClick={() => {
                                setActiveTab(1)
                            }}>
                                Product/Service Terms
                            </Button>
                            <Button className={ `${ActiveTab === 4 ? "" : "buttonUnActive text-color"} ` } onClick={() => {
                                setActiveTab(4)
                            }}>
                                Troubleshooting
                            </Button>
                            <Button className={ `${ActiveTab === 3 ? "" : "buttonUnActive text-color"} ` } onClick={() => {
                                setActiveTab(3)
                            }}>
                                Glossary
                            </Button>
                            <Button className={ `${ActiveTab === 5 ? "" : "buttonUnActive text-color"} ` } onClick={() => {
                                setActiveTab(5)
                            }}>
                                Company Information
                            </Button>
                        </div>
                    </div>
                    {ActiveTab === 0 ? <FAQComponent setShowModal={setShowModal} /> : ""}
                    {ActiveTab === 1 ? <PolicyTerms  /> : ""}
                    {ActiveTab === 2 ? <KnowledgeBaseComponent setShowModalKnowledgeBase={setShowModalKnowledgeBase} /> : ""}
                    {ActiveTab === 3 ? <Glossary setShowModalGlossary={setShowModalGlossary} /> : ""}
                    {ActiveTab === 4 ? <Troubleshooting setShowModalGlossary={setShowModalGlossary} /> : ""}
                    {ActiveTab === 5 ? <CompanyDetail id="companyDetail" setShowModalGlossary={setShowModalGlossary} /> : ""}
                </CardBody>
            </Card>
        </div>
    )
}

export default FAQ