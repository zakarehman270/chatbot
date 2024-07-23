import React, { useState , useEffect} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const Glossary = ({ setShowModalGlossary }) => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);

    useEffect(() => {
        dispatch(handlerGetAnyData("glossary"))
        return () => { }
    }, [])
    console.log("AllData",AllData)
    return (
        <div className='mt-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className=' MainHeading mb-3 '>
                    Glossary
                </h1>
                <Button onClick={() => {
                    setShowModalGlossary(true)
                }}>
                    Add Glossary
                </Button>
            </div>
            {AllData?.glossary?.map((item, index) => (
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
export default Glossary