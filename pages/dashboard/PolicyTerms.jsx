import React, { useEffect , useState } from 'react'
import {
    Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import TableSortable from '@/components/TableSortable';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
import GeneralModal from '@/common/GeneralModal';
import AddPolicyTerm from '@/Forms/AddPolicyTerm';
const PolicyTerms = ({ }) => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const [ShowModalPolicyTerm, setShowModalPolicyTerm] = useState(false)
    const [Data, setData] = useState()
    const dispatch = useDispatch();

    const Headers = [
        {
            Header: 'title',
            accessor: 'title',
        },
        {
            Header: 'Category',
            accessor: 'category',
        },
        {
            Header: 'Product',
            accessor: 'product',
        },
        {
            Header: 'Service',
            accessor: 'Service',
        },

        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    let URLTER = "policy-terms"
    console.log("mmmm AllData", AllData?.[URLTER])
    function handleClosePolicyTerm(params) {
        setShowModalPolicyTerm(false)
    }
    useEffect(() => {
        dispatch(handlerGetAnyData("policy-terms"))
        return () => { }
    }, [])

    return (
        <div className="">
            <GeneralModal size={"lg"} show={ShowModalPolicyTerm} handleClose={handleClosePolicyTerm}
                ModalContent={<AddPolicyTerm handleClose={handleClosePolicyTerm} data={Data} />}
                ModalHeader={Data ? "Edit Product/Service Terms" : "Add Product/Service Terms"} />
            <div className='mob-flex justify-content-between align-items-center'>
                <h1 className=' MainHeading mb-3 '>
                    Product/Service Terms
                </h1>
                <Button onClick={() => {
                    setShowModalPolicyTerm(true)
                    setData("")
                }}>
                    Add Product/Service Terms
                </Button>
            </div>
            <TableSortable
                data={AllData?.[URLTER] ? AllData?.[URLTER] : []}
                columns={Headers}
                LinkView={"policy-terms/view"}
                SearchData={'title'}
                DeleteName={"Product/Service Terms"}
                deleteURL={"policy-terms"}
                setData={setData}
                UpdateTableDate={true}
                setShowModal={setShowModalPolicyTerm}
            />
        </div>

    )
}

export default PolicyTerms