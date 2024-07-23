import React, { useState , useEffect } from 'react'
import {
    Button, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';   
import {  useDispatch, useSelector } from 'react-redux'; 
import AddDepartment from '@/Forms/AddDepartment';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const Department = () => { 
    const [Data, setData] = useState("")
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    const [ShowModal, setShowModal] = useState(false) 
    function handleClose() {    
        setShowModal(false)      
    }   
    const Headers = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Description',
            accessor: 'descriptions',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]

    useEffect(() => {
        dispatch(handlerGetAnyData("departments"))
        return () => { }
    }, [])
    console.log("AllData",AllData?.departments)
    return ( 
        <div className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddDepartment handleClose={handleClose} data={Data} />}
                ModalHeader={Data ? "Edit Department" : "Add Department"} />
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Department
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Department
                    </Button>
                </div>
                <TableSortable
                    data={AllData?.departments ? AllData?.departments : []}
                    columns={Headers}
                    SearchData={'title'}
                    DeleteName={"Departments"}
                    deleteURL={"departments"}
                    setData={setData}
                    setShowModal={setShowModal}
                    UpdateTableDate={true}
                />
        </div>
    )
}
export default Department