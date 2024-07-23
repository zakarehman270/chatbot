import React, { useState , useEffect} from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import { useDispatch, useSelector } from 'react-redux';
import AddLeads from '@/Forms/AddLeads';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const LeadsPage = () => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const [Data, setData] = useState(false)
    const dispatch = useDispatch();
    const [ShowModal, setShowModal] = useState(false)
    function handleClose(params) {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'First Name',
            accessor: 'firstname',
        },
        {
            Header: 'Last Name',
            accessor: 'lastname',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Company',
            accessor: 'company',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Send Message',
            accessor: 'Send Message',
        },
        {
            Header: 'Add Note',
            accessor: 'Add Note',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    useEffect(() => {
        dispatch(handlerGetAnyData("lead"))
        return () => { }
    }, [])
    console.log("AllData",AllData)
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddLeads handleClose={handleClose} data={Data} />}
                ModalHeader={Data? "Edit " : "Add Leads"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Leads
                    </Typography>
                    <Button onClick={() => { 
                        setShowModal(true) 
                        setData("")
                    }}>  
                        Add Leads   
                    </Button> 
                </div> 
                <TableSortable
                    data={AllData?.lead ? AllData?.lead : []}
                    columns={Headers}
                    LinkView={"leads/view"}
                    SearchData={'Name'}
                    DeleteName={"Leads"}
                    deleteURL={"lead"}
                    setData={setData}
                    setShowModal={setShowModal}
                    UpdateTableDate={true}
                />
            </CardBody>
        </Card>
    )
}
export default LeadsPage