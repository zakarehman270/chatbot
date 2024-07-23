import React, { useState } from 'react'
import {
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import TagsPage from './TagsPage';
import CategoriesPage from './CategoriesPage';
import Department from './Department';

const Settings = () => {
    const [ActiveTab, setActiveTab] = useState(0)
    // for Add FAQ
    const [ShowModal, setShowModal] = useState(false)
    function handleClose(params) {
        setShowModal(false)
    }
    // for Add PolicyTerm
    const [ShowModalPolicyTerm, setShowModalPolicyTerm] = useState(false)
    function handleClosePolicyTerm(params) {
        setShowModalPolicyTerm(false)
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
            <div className='my-2'>
                <Card className='mt-3'>
                    <CardBody className=" px-4 pt-0 pb-2 pt-4">
                        <div className='row '>
                            <div className='col-md-4'>
                                <Button className={`w-100 tabBorderRadius ${ActiveTab === 0 ? "" : "buttonUnActive text-color"} `} onClick={() => {
                                    setActiveTab(0)
                                }}>
                                    Categories
                                </Button>
                            </div>
                            <div className='col-md-4'>
                                <Button className={`w-100 tabBorderRadius ${ActiveTab === 1 ? "" : "buttonUnActive text-color"} `} onClick={() => {
                                    setActiveTab(1)
                                }}>
                                    Tags
                                </Button>
                            </div>
                            <div className='col-md-4'>
                                <Button className={`w-100 tabBorderRadius ${ActiveTab === 2 ? "" : "buttonUnActive text-color"} `} onClick={() => {
                                    setActiveTab(2)
                                }}>
                                    Departments
                                </Button>
                            </div>
                        </div>
                        {ActiveTab === 1 ? <TagsPage /> : ""}
                        {ActiveTab === 0 ? <CategoriesPage /> : ""}
                        {ActiveTab === 2 ? <Department /> : ""}
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default Settings