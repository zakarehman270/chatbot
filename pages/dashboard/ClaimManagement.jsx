import React, { useState } from 'react'
import { 
    Button, 
    Card, 
    CardBody, Typography, 
} from "@material-tailwind/react"; 
import TableSortable from '@/components/TableSortable';
import { Link } from 'react-router-dom'; 
import { Claims } from '@/Redux/Claims';
const ClaimManagement = () => {
    // const { Certificate } = useSelector((state) => state.GeneralCrudOperation);
    const [ShowModal, setShowModal] = useState(false)
   
    const Headers = [
        {
            Header: 'Claimant',
            accessor: 'Claimant',
        },
        {
            Header: 'Company',
            accessor: 'Company',
        },
        {
            Header: 'Contact Number',
            accessor: 'Contact Number',
        },
        {
            Header: 'Email',
            accessor: 'Email',
        },
        {
            Header: 'Adjuster Name',
            accessor: 'Adjuster Name',
        },
        {
            Header: 'Adjuster Email',
            accessor: 'Adjuster Email',
        },
        {
            Header: 'Adjuster Phone',
            accessor: 'Adjuster Phone',
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
                        Claims
                    </Typography>
                    <Link to="/dashboard/add-claims">
                        <Button onClick={() => {
                            setShowModal(true)
                        }}>
                            Add Claims
                        </Button>
                    </Link>
                </div>
                <TableSortable
                    data={Claims}
                    columns={Headers}
                    LinkView={"claim-management/view"}
                    SearchData={'Name'}
                    DeleteName={"Claims"}
                />
            </CardBody>
        </Card>
    )
}
export default ClaimManagement