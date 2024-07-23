import React, { useState , useEffect } from 'react'
import { 
    Button,  
    Card,      
    CardBody, Typography, 
} from "@material-tailwind/react";
import GeneralModal from '@/common/GeneralModal';
import AddCategoriesForm from '@/Forms/AddCategoriesForm';
import { useDispatch, useSelector } from 'react-redux';
import TableSortable from '@/components/TableSortable';
import { handlerGetCategories } from '@/Redux/Category';
const CategoriesPage = () => {
    const { getListCategories } = useSelector((state) => state.Category);
    const dispatch = useDispatch()
    const [ShowModal, setShowModal] = useState(false)
    const [Data, setData] = useState('')
    function handleClose(params) {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Parent getListCategories',
            accessor: 'parent_category',
        },

        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    useEffect(() => {
      dispatch(handlerGetCategories())
      return () => { }
    }, [])
    return (
        <div className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddCategoriesForm handleClose={handleClose} data={Data} />}
                ModalHeader={"Add Categories"} />
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Categories
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Categories
                    </Button>
                </div>
                <TableSortable
                    data={getListCategories ? getListCategories : [] }
                    columns={Headers}
                    SearchData={'title'}
                    DeleteName={"Category"}
                    setData={setData}
                    UpdateTableDate={true}
                    setShowModal={setShowModal}
                    deleteURL={"category/delete"}
                />
        </div>
    )
}
export default CategoriesPage