import React, { useState , useEffect} from 'react'
import { 
    Button, 
    Card, 
    CardBody, Typography, 
} from "@material-tailwind/react"; 
import TableSortable from '@/components/TableSortable'; 
import { Certificate } from '@/Redux/Certificate'; 
import { Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const CertificateManagement = () => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const Headers = [
        {
            Header: 'Company Name',
            accessor: 'Company Name',
        },
        {
            Header: 'Address',
            accessor: 'Address',
        },
        {
            Header: 'Phone',
            accessor: 'Phone',
        },
        {
            Header: 'City',
            accessor: 'City',
        },
        {
            Header: 'State',
            accessor: 'State',
        },
        {
            Header: 'Zip',
            accessor: 'Zip',
        },
        {
            Header: 'Email',
            accessor: 'Email',
        },
        {
            Header: 'Action',
            accessor: 'action',
        },
    ]
    useEffect(() => {
        dispatch(handlerGetAnyData("certificate-request"))
        return () => { }
    }, [])
   console.log("AllData",AllData)
    return (
        <Card className='mt-3'>
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Certificate
                    </Typography>
                    <Link to="/dashboard/add-Certificate">
                        <Button onClick={() => {
                            setShowModal(true)
                        }}>
                            Add Certificate
                        </Button>
                    </Link>

                </div>
                <TableSortable
                    data={Certificate}
                    columns={Headers}
                    LinkView={"certificate-management/view"}
                    SearchData={'Name'}
                    DeleteName={"Certificate"}
                />
            </CardBody>
        </Card>
    )
}
export default CertificateManagement