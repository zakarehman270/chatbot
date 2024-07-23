import React, { useState, useEffect } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
} from "@material-tailwind/react";
import SingleSelect from '@/common/customSingleSelect';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';

const FAQComponent = ({ setShowModal }) => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handlerGetAnyData("faq"))
      return () => {}
    }, [])
    return (
        <div className='mt-3'>
            <div className='d-flex justify-content-between align-items-center mb-3'>
                <h1 className=' MainHeading mb-3 '>
                    FAQ
                </h1>
                <Button onClick={() => {
                    setShowModal(true)
                }}>
                    Add FAQ
                </Button>
            </div>
            <div className='d-flex justify-content-end align-items-center'>
                <form className="row g-3">
                    <div className='d-flex align-items-center'>
                        <span className='me-2 fw-bold'>Categories:</span>
                        <SingleSelect
                            options={[
                                { value: 'Artisan Contractors', label: 'Artisan Contractors' },
                                { value: 'Specialty Contractors ', label: 'Specialty Contractors ' },
                            ]}
                            handlerSelectedOption={(options) => {
                                Values.category = options.value
                                setValues({ ...Values })
                                resetValidation()
                            }}
                        />
                    </div>
                </form>
            </div>
            {AllData && AllData?.faq?.map((item, index) => (
                <Accordion key={index} open={open === index}>
                    <AccordionHeader onClick={() => handleOpen(index)}>
                        {item.title}
                    </AccordionHeader>
                    <AccordionBody>{item.description}</AccordionBody>
                </Accordion>
            ))}
        </div>
    )
}

export default FAQComponent