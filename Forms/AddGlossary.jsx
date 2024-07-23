import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { HandlerAddGlossary } from '@/Redux/GeneralCrudOperation';
import CustomMultiSelect from '@/components/customMultiSelect';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddGlossary = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        description: data?.description,
        title: data?.title,
        tags:data?.tags
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        code: false,
        description: false,
        title: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            code: false,
            description: false,
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
        if (!Values.description) {
            setLocalErrorMessage((prevState) => ({ ...prevState, description: true }));
            flag = false;
        }
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
                    url: "glossary/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "glossary",
                    data: Values
                }))
            }
        }
    };
    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("glossary"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("glossary"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])
    useEffect(() => {
        dispatch(handlerGetAnyData("tag"))
        return () => { }
    }, [])

    console.log("AllData",AllData)
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <label className="form-label">Tag</label>
                    <CustomMultiSelect ImageSource={"/assets/icons/DropDownIcon.svg"}
                                options={(AllData?.tag || []).map((item) => ({
                                    value: item,
                                    label: item?.tagname
                                }))}
                                handlerSelectedOption={(options) => {
                                    Values.tags = options.map(item => item?.value.id);
                                    setValues({ ...Values })
                                }}
                            />
                    {localErrorMessage.tags && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.description}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.description ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        name="description"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.description && <Alert variant="danger">This field is required</Alert>}
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
export default AddGlossary