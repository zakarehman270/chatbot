import React, { useState } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import TableSortable from '@/components/TableSortable';
import { Link } from 'react-router-dom';
import { InsuranceSurveyData } from '@/Redux/InsuranceSurvey';
const InsuranceSurvey = () => {
    // const { Certificate } = useSelector((state) => state.GeneralCrudOperation);
    const [ShowModal, setShowModal] = useState(false)

    const Headers = [
        {
            Header: 'State',
            accessor: 'State',
        },
        {
            Header: 'Products',
            accessor: 'Products',
        },
        {
            Header: 'Company',
            accessor: 'Company',
        },
        // {
        //     Header: 'Full Name',
        //     accessor: 'First Name',
        // },
        // {
        //     Header: 'Last Name',
        //     accessor: 'Last Name',
        // },
        {
            Header: 'Full Name',
            accessor: 'fullName',
        },
        {
            Header: 'Address',
            accessor: 'Address',
        },
        {
            Header: 'City',
            accessor: 'City',
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
            Header: 'Phone',
            accessor: 'Phone',
        },
        {
            Header: 'Action',
            accessor: 'Action',
        },
    ]

    return (
        <Card className='mt-3'>
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Insurance Survey
                    </Typography>
                    <Link to="/dashboard/add-insurance-survey">
                        <Button onClick={() => {
                            setShowModal(true)
                        }}>
                            Add Insurance Survey
                        </Button>
                    </Link>
                </div>
                <TableSortable
                    data={InsuranceSurveyData}
                    columns={Headers}
                    LinkView={"insurance-survey/view"}
                    SearchData={'Name'}
                    DeleteName={"Claims"}
                />
            </CardBody>
        </Card>
    )
}
export default InsuranceSurvey