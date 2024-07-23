import React, { useState , useEffect } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import AddStaff from '@/Forms/AddStaff';
import { useDispatch, useSelector } from 'react-redux';
import UsersModal from '../../components/LeftSideModal'
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const Staff = () => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    
    const [ShowModal, setShowModal] = useState(false)
    const [IsOpenUserModal, setIsOpenUserModal] = useState(false)
    const [Data, setData] = useState()
    function handleClose() {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'First Name',
            accessor: 'name',
        },
        {
            Header: 'Last Name',
            accessor: 'Last Name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'Role',
            accessor: 'role',
        },
        {
            Header: 'Category',
            accessor: 'Category',
        },
        {
            Header: 'Permission',
            accessor: 'Permission',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]   

    useEffect(() => {
        dispatch(handlerGetAnyData("staff"))
        return () => { }
    }, [])


    console.log("Data",Data)
    return (
        <Card className='mt-3'>
            <UsersModal IsOpenUserModal={IsOpenUserModal} setIsOpenUserModal={setIsOpenUserModal}  data={Data} />
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddStaff handleClose={handleClose} data={Data} />}
                ModalHeader={Data? "Edit Staff" : "Add Staff"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Staff
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}> 
                        Add Staff 
                    </Button> 
                </div> 
                <TableSortable
                    data={AllData?.staff ? AllData?.staff : []}
                    columns={Headers}
                    SearchData={'name'}
                    setIsOpenUserModal={setIsOpenUserModal}
                    leftSideModal={true}
                    DeleteName={"Staff"}
                    deleteURL={"staff"}
                    setData={setData}
                    setShowModal={setShowModal}
                    UpdateTableDate={true}
                />
            </CardBody>
        </Card>
    )
}
export default Staff