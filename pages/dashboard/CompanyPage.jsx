import React, { useState } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import { useSelector } from 'react-redux';
import AddCompany from '@/Forms/AddCompany';
import TableSortable from '@/components/TableSortable';
const CompanyPage = () => {
    const { companyData } = useSelector((state) => state.GeneralCrudOperation);
    const [ShowModal, setShowModal] = useState(false)
    function handleClose(params) {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Address',
            accessor: 'address',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Website',
            accessor: 'website',
        },
        {
            Header: 'Action',
            accessor: 'action',
        },
    ]
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddCompany handleClose={handleClose} data={""} />}
                ModalHeader={"Add Company"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Company
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                    }}>
                        Add Company
                    </Button>
                </div>
                <TableSortable
                    data={companyData}
                    columns={Headers}
                    LinkView={"company/view"}
                    SearchData={'name'}
                    DeleteName={"Company"}
                />
            </CardBody>
        </Card>
    )
}
export default CompanyPage