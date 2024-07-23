import React, { useState, useEffect } from 'react'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import SingleSelect from '@/common/customSingleSelect';

const KnowledgeBaseDetailsPage = () => {
    const { FAQ } = useSelector((state) => state.GeneralCrudOperation);
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div>
            <Card className='mt-3'>
                <CardBody className=" px-4 pt-0 pb-2">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Knowledge Base Details
                        </Typography>

                        <div>
                            <form className="row g-3">
                                <div className='d-flex align-items-center'>
                                    <span className='me-2'>Categories:</span>
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
                    </div>
                    {FAQ.map((item, index) => (
                        <Accordion key={index} open={open === index}>
                            <AccordionHeader onClick={() => handleOpen(index)}>
                                {item.question}
                            </AccordionHeader>
                            <AccordionBody>{item.answer}</AccordionBody>
                        </Accordion>
                    ))}
                </CardBody>
            </Card>
        </div>
    )
}

export default KnowledgeBaseDetailsPage