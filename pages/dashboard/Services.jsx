import React, { useState , useEffect } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import AddService from '@/Forms/AddService';
import { useDispatch, useSelector } from 'react-redux';
import TableSortable from '@/components/TableSortable';
import { handlerGetListService } from '@/Redux/Service';
const Services = () => {
    const { getListService, loading } = useSelector((state) => state.Service);
    const [ShowModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const [Data, setData] = useState(null)
    function handleClose(params) {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Related Product',
            accessor: 'product',
        },
        {
            Header: 'Price',
            accessor: 'price',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]

    useEffect(() => {
        dispatch(handlerGetListService())
        return () => {
        }
    }, [])
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddService handleClose={handleClose} data={Data} />}
                ModalHeader={"Add Service"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Services
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData(null)
                    }}>
                        Add Services
                    </Button>
                </div>
                <TableSortable
                    data={getListService?getListService:[]}
                    columns={Headers}
                    LinkView={"services/view"}
                    SearchData={'title'}
                    DeleteName={"Service"}
                    setData={setData}
                    UpdateTableDate={true}
                    setShowModal={setShowModal}
                    deleteURL={"service/delete"}
                />
            </CardBody>
        </Card>
    )
}

export default Services