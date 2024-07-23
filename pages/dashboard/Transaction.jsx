import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import AddTransaction from '@/Forms/AddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import GeneralModal from '@/common/GeneralModal';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const Transaction = () => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    const [ShowModal, setShowModal] = useState(false)
    const [Data, setData] = useState(false)
    function handleClose() {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'Transaction ID',
            accessor: 'transactionID',
        },
        {
            Header: 'Service Category',
            accessor: 'serviceCategory',
        },
        {
            Header: 'Customer',
            accessor: 'customerID',
        },
        {
            Header: 'Payment Type',
            accessor: 'Paymentmethod',
        },
        {
            Header: 'Charge Amount',
            accessor: 'Amount',
        },
        {
            Header: 'Invoice',
            accessor: 'invoice',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]

    useEffect(() => {
        dispatch(handlerGetAnyData("transaction"))
        return () => { }
    }, [])
    console.log("AllData", AllData)
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddTransaction handleClose={handleClose} data={Data} />}
                ModalHeader={Data ? "Edit Transaction" : "Add Transaction"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Transaction
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Transaction
                    </Button>
                </div>
                <TableSortable
                    data={AllData?.transaction ? AllData?.transaction : []}
                    columns={Headers}
                    UpdateTableDate={true}
                    LinkView={"transaction/view"}
                    SearchData={'keyReference'}
                    DeleteName={"Transaction"}
                    deleteURL={"transaction"}
                    setData={setData}
                    setShowModal={setShowModal}
                />
            </CardBody>
        </Card>
    )
}
export default Transaction