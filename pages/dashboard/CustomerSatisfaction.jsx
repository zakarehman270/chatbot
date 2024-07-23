import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import AddReview from '@/Forms/AddReview';
import { useDispatch, useSelector } from 'react-redux';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const CustomerSatisfaction = () => {
    const [ShowModal, setShowModal] = useState(false)
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const [Data, setData] = useState()
    const dispatch = useDispatch();
    function handleClose(params) {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'user_ID',
            accessor: 'user_ID',
        },
        {
            Header: 'Customer Name',
            accessor: 'customer_name',
        },
        {
            Header: 'Customer Email',
            accessor: 'customer_email',
        },
        {
            Header: 'Customer Phone',
            accessor: 'customer_phone',
        },
        {
            Header: 'Channel Name',
            accessor: 'channel_name',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    useEffect(() => {
        dispatch(handlerGetAnyData("customer-satisfaction"))
        return () => { }
    }, [])

    let URLTerm = "customer-satisfaction"
    console.log("AllData", AllData)
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddReview handleClose={handleClose} data={Data} />}
                ModalHeader={Data ? "Edit Customer Satisfaction" : "Add Customer Satisfaction"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Customer Satisfaction
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Customer Satisfaction
                    </Button>
                </div>
                <TableSortable
                    data={AllData?.[URLTerm] ? AllData?.[URLTerm] : []}
                    columns={Headers}
                    LinkView={"customer-satisfaction-detail/view"}
                    SearchData={'title'}
                    DeleteName={"Customer Satisfaction"}
                    deleteURL={"customer-satisfaction"}
                    setData={setData}
                    UpdateTableDate={true}
                    setShowModal={setShowModal}
                />
            </CardBody>
        </Card>
    )
}

export default CustomerSatisfaction