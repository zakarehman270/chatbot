import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
import CustomMultiSelect from '@/components/customMultiSelect';
const AddTagsForm = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        tagname: data?.tagname,
        description: data?.description,
        relatedtags: data?.relatedtags,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        tagname: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            tagname: false,
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
        // Validate the form fields before submission
        if (!Values.tagname) {
            setLocalErrorMessage((prevState) => ({ ...prevState, tagname: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "tag/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "tag",
                    data: Values
                }))
            }
        }
    };

    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("tag"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("tag"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])

    useEffect(() => {
        dispatch(handlerGetAnyData("tag"))
        return () => { }
    }, [])

    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>

                <div className="col-md-6">
                    <label className="form-label">Tag Name</label>
                    <input
                        value={Values.tagname}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.tagname ? 'inputFieldRedColor' : ''}`}
                        placeholder="Tag Name"
                        type="text"
                        name="tagname"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.tagname && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Related Tag</label>
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
                    {localErrorMessage.address && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.description}
                        onChange={handleChange}
                        className={`form-control`}
                        placeholder="Description"
                        type="text"
                        Name="description"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
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
export default AddTagsForm