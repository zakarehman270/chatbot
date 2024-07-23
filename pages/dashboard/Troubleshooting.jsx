import React, { useState, useEffect } from 'react'
import {
    Typography,
} from "@material-tailwind/react";
import AddTroubleshootingForm from '@/Forms/AddTroubleshootingForm';
import GeneralModal from '@/common/GeneralModal';
import { Button } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const Troubleshooting = () => {
    const [ShowModal, setShowModal] = useState(false)
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handlerGetAnyData("troubleshooting"))
        return () => { }
    }, [])

    function handleClose(params) {
        setShowModal(false)
    }

    console.log("AllData", AllData?.troubleshooting)


    return (
        <div>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddTroubleshootingForm handleClose={handleClose} data={""} />}
                ModalHeader={"Add Troubleshooting"} />
            <h1 className='MainHeading mb-1'></h1>
            <div className='mob-flex justify-content-between align-items-center mt-4'>
                <Typography variant="h6" color="blue-gray" className="mb-2">
                    Troubleshooting Article
                </Typography>
                <Button onClick={() => {
                    setShowModal(true)
                }}>
                    Add Troubleshooting
                </Button>
            </div>
            {AllData?.troubleshooting?.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='d-flex gap-2 align-items-center mt-2'>
                            <img src="/assets/icons/thinking.png" alt="thinking" className='thinkingIcon' />
                            <p className='headingProblem'>Problem</p>
                        </div>
                        <div className='mt-2'>
                            <p className='descriptionsInTroubleshooting'>{item?.title}</p>
                        </div>
                        {/* <div className='d-flex gap-2 align-items-center mt-2'>
                            <img src="/assets/icons/plant.png" alt="plant" className='plantIcon' />
                            <p className='headingProblem'>Solution</p>
                        </div>
                        <div className='mt-2'>
                            <p className='descriptionsInTroubleshooting mt-1'>Describe how someone would solve the problem in short , step by step</p>
                            <p className='descriptionsInTroubleshooting textSize'>1: Add steps that are simple and self-contained</p>
                            <p className='descriptionsInTroubleshooting textSize'>2: Add illustrations to instruction by typing</p>
                            <p className='descriptionsInTroubleshooting textSize'>3: Stick to 3-5 steps per task to avoid overloading</p>
                        </div> */}
                        <div className='mt-2 d-flex gap-2 align-items-center outerWrapperHeighLightQuestion p-2'>
                            <img src="/assets/icons/question.png" alt="question" className='questionIcon' />
                            <p className='importantInformation'>{item?.description}</p>
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}

export default Troubleshooting