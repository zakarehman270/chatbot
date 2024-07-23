import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ResetAddCategory, ResetUpdatedCategory, handlerAddCategories, handlerGetCategories, handlerUpdateCategories } from '@/Redux/Category';
import SingleSelect from '@/common/customSingleSelect';
const AddCategoriesForm = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AddCategory, loading, getListCategories , UpdatedCategory } = useSelector((state) => state.Category);
    const [Values, setValues] = useState({
        title: data?.title,
        description: data?.description,
        image: data?.image,
        parent_category: data?.parent_category
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
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
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        }
        // Reset the error messages w      hen the form is valid and submitted
        if (flag) {
            if (data) {
                dispatch(handlerUpdateCategories({
                    data : Values,
                    id :data.id
                }))
            } else {
                dispatch(handlerAddCategories(Values))
            }
        }
    };
    useEffect(() => {
        if (AddCategory) {
            handleClose()
            toast.success("Successfully Added Category")
            dispatch(handlerGetCategories())
        }
        dispatch(ResetAddCategory())
        return () => {
        }
    }, [AddCategory])

    useEffect(() => {
        if (UpdatedCategory) {
            handleClose()
            toast.success("Successfully Updated Category")
            dispatch(handlerGetCategories())
        }
        dispatch(ResetUpdatedCategory())
        return () => {
        }
    }, [UpdatedCategory])

    

    useEffect(() => {
        dispatch(handlerGetCategories())
        return () => { }
    }, [])

    const handleFileChange = (e) => {
        const imageFile = e.target.files[0];
        const imageURL = URL.createObjectURL(imageFile);
        if (imageFile) {
            Values.image = imageURL
            setValues({ ...Values});
        }
    };
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
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Parent category</label>
                    <SingleSelect
                        options={(getListCategories || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.parent_category = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        // defaultSelected={Values.parent_category}
                        defaultSelected={
                            getListCategories.filter(item => item.id === Values.parent_category)
                            .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Image</label>
                    <input
                        className={`form-control`}
                        placeholder="Image"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                        type="file"
                        name="image"
                        accept="image/*"
                        onClick={(event) => {
                            event.target.value = null
                        }}
                        onChange={handleFileChange}
                    />
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
export default AddCategoriesForm