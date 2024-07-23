import React, { useState , useEffect} from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';   
import {  useDispatch, useSelector } from 'react-redux'; 
import AddTagsForm from '@/Forms/AddTagsForm';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const TagsPage = () => { 
    const [Data, setData] = useState("")
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    const [ShowModal, setShowModal] = useState(false) 
    function handleClose() {    
        setShowModal(false)      
    }   
    const Headers = [
        {
            Header: 'Name',
            accessor: 'tagname',
        },
        {
            Header: 'Related Tags',
            accessor: 'relatedtags',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    useEffect(() => {
        dispatch(handlerGetAnyData("tag"))
        return () => { }
    }, [])
    console.log("AllData",AllData)
    
    return ( 
        <div className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddTagsForm handleClose={handleClose} data={Data} />}
                ModalHeader={Data ? "Edit Tags" : "Add Tags"} />
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Tags
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Tags
                    </Button>
                </div>
                <TableSortable
                    data={AllData?.tag ? AllData?.tag : []}
                    columns={Headers}
                    SearchData={'name'}
                    DeleteName={"Tag"}
                    deleteURL={"tag"}
                    setData={setData}
                    setShowModal={setShowModal}
                    UpdateTableDate={true}
                />
          
        </div>
    )
}
export default TagsPage