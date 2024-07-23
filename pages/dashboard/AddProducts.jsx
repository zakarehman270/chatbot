import AddProductsForm from '@/Forms/AddProducts'
import React from 'react'

const AddProducts = () => {
    function handleClose(params) {}
    return (
        <div>
            <AddProductsForm handleClose={handleClose} data={""} />
        </div>
    )
}

export default AddProducts