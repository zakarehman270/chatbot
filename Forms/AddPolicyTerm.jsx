import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MyEditor from '@/components/RichTextEditor';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddPolicyTerm = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        title: data?.title,
        policy_details: data?.policy_details,
        category: data?.category,
        product: data?.product,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,  
        policy_details: false,
        category: false,
        product: false,  
    }); 
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            policy_details: false,
            category: false,
            product: false,
        });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        resetValidation();
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let flag = true;
        if (!Values.policy_details) {
            setLocalErrorMessage((prevState) => ({ ...prevState, policy_details: true }));
            flag = false;
        }
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        }
        if (!Values.product) {
            setLocalErrorMessage((prevState) => ({ ...prevState, product: true }));
            flag = false;
        }
        if (!Values.category) {
            setLocalErrorMessage((prevState) => ({ ...prevState, category: true }));
            flag = false;
        }
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "policy-terms/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "policy-terms",
                    data: Values
                }))
            }
        }
    };
    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("policy-terms"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("policy-terms"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])
    useEffect(() => {
        dispatch(handlerGetAnyData("category"))
        dispatch(handlerGetAnyData("product"))
        dispatch(handlerGetAnyData("service"))
        return () => { }
    }, [])

    console.log("AllData", AllData)
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Title</label>
                    <input
                        value={Values.title}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.title ? 'inputFieldRedColor' : ''}`}
                        placeholder="Title"
                        type="text"
                        name="title"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.title && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Category</label>
                    <SingleSelect
                        options={(AllData?.category || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.category = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.category?.filter(item => item.id === Values.category)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.category && <Alert variant="danger">This field is required</Alert>}
                </div>

                <div className="col-md-6 position-relative SelectSingleDropdownInModal">
                    <label className="form-label">Product</label>
                    <SingleSelect
                        options={(AllData?.product || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.product = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.product?.filter(item => item.id === Values.product)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.product && <Alert variant="danger">This field is required</Alert>}
                </div>

                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Service</label>
                    <SingleSelect
                        options={(AllData?.service || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.service = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.service?.filter(item => item.id === Values.service)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.service && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Policy Details</label>
                    <MyEditor setValue={(value) => {
                        Values.policy_details = value
                        setValues({...Values})
                        console.log("data,,,,", value)
                    }} />
                    {localErrorMessage.policy_details && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className=" d-flex justify-content-end gap-2">
                    <Button type='button' className='buttonUnActive text-unset' onClick={() => {
                        handleClose()
                    }}>
                        Cancel
                    </Button>
                    {loading ? <LoadingButton /> :
                        <Button type='submit'>
                            Save
                        </Button>
                    }
                </div>
            </form>
        </Container >
    );
};
export default AddPolicyTerm