import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddDepartment = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        descriptions: data?.descriptions,
        title: data?.title,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false
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
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        }
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "departments",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "departments",
                    data: Values
                }))
            }
        }
    };
    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("departments"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("departments"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                
                <div className="col-md-12">
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
                
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.descriptions}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.descriptions ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        name="descriptions"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.descriptions && <Alert variant="danger">This field is required</Alert>}
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
export default AddDepartment