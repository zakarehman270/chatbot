import React, { useEffect, useState } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { HandlerAddKnowledgeBase } from '@/Redux/GeneralCrudOperation';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CustomMultiSelect from '@/components/customMultiSelect';

const KnowledgeBase = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
    const [Values, setValues] = useState({
        title: data?.title,
        description: data?.description,
        Category: data?.Category,
        Product: data?.Category,
        Service: data?.Category,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
        description: false,
        Category: false,
        Product: false,
        Service: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            description: false,
            Category: false,
            product: false,
            Service: false,
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
        if (!Values.description) {
            setLocalErrorMessage((prevState) => ({ ...prevState, description: true }));
            flag = false;
        }
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        } if (!Values.Category) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Category: true }));
            flag = false;
        } if (!Values.Product) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Product: true }));
            flag = false;
        } if (!Values.Service) {

            setLocalErrorMessage((prevState) => ({ ...prevState, Service: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdate(Values))
            } else {
                setLoading(true)
                dispatch(HandlerAddKnowledgeBase(Values))
            }
        }
    };
    useEffect(() => {
        if (Loading) {
            const timeoutId = setTimeout(() => {
                // After 2 seconds, set loading back to false
                setLoading(false);
                handleClose()
                toast.success("Successfully Added Knowledge Base")
            }, 1500);
            return () => {
                clearTimeout(timeoutId);
            }; // 2000 milliseconds = 2 seconds
        }
    }, [Loading]);
    const [dragging, setDragging] = useState(false);
    const [ProductImageList, setProductImageList] = useState([])
    const handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(true);
    };
    const handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setDragging(false);
    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleFileChange = (event) => {
        const files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            ProductImageList.push(URL.createObjectURL(files[i]))
        }
        setProductImageList([...ProductImageList])
    };
    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files; // Access files from event.dataTransfer
        const newProductImageList = [...ProductImageList];
        for (let i = 0; i < files.length; i++) {
            newProductImageList.push(URL.createObjectURL(files[i]));
        }
        setProductImageList(newProductImageList);
        setDragging(false);
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
                    <label className="form-label">Category</label>
                    <CustomMultiSelect ImageSource={"/assets/icons/DropDownIcon.svg"} options={[
                        { value: 'Monday', label: 'Monday' },
                        { value: 'Tuesday', label: 'Tuesday' },
                        { value: 'Wednesday', label: 'Wednesday' },
                        { value: 'Thursday', label: 'Thursday' },
                        { value: 'Friday', label: 'Friday' },
                        { value: 'Sunday', label: 'Friday' },
                        { value: 'Saturday', label: 'Saturday' },
                    ]}
                        handlerSelectedOption={(options) => {
                            formData.days = options.map(item => item.value);
                            setFormData({ ...formData })
                        }}
                    />
                    {localErrorMessage.title && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Product</label>
                    <CustomMultiSelect ImageSource={"/assets/icons/DropDownIcon.svg"} options={[
                        { value: 'Monday', label: 'Monday' },
                        { value: 'Tuesday', label: 'Tuesday' },
                        { value: 'Wednesday', label: 'Wednesday' },
                        { value: 'Thursday', label: 'Thursday' },
                        { value: 'Friday', label: 'Friday' },
                        { value: 'Sunday', label: 'Friday' },
                        { value: 'Saturday', label: 'Saturday' },
                    ]}
                        handlerSelectedOption={(options) => {
                            formData.days = options.map(item => item.value);
                            setFormData({ ...formData })
                        }}
                    />
                    {localErrorMessage.Product && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Service</label>
                    <CustomMultiSelect ImageSource={"/assets/icons/DropDownIcon.svg"} options={[
                        { value: 'Monday', label: 'Monday' },
                        { value: 'Tuesday', label: 'Tuesday' },
                        { value: 'Wednesday', label: 'Wednesday' },
                        { value: 'Thursday', label: 'Thursday' },
                        { value: 'Friday', label: 'Friday' },
                        { value: 'Sunday', label: 'Friday' },
                        { value: 'Saturday', label: 'Saturday' },
                    ]}
                        handlerSelectedOption={(options) => {
                            formData.days = options.map(item => item.value);
                            setFormData({ ...formData })
                        }}
                    />
                    {localErrorMessage.Service && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className='col-md-12'>
                    <div className={`review-drag ${dragging ? "Dragging" : ""}`}>
                        {ProductImageList.length > 0 ? <div className='d-flex gap-2 flex-wrap'>
                            {ProductImageList.map((item, index) => {
                                return (
                                    <div className='UploadImage position-relative'>
                                        < img
                                            key={index}
                                            src={item}
                                            alt="uploadImage"
                                            className='image'
                                        />
                                    </div>
                                )
                            })}
                        </div> :
                            <div className='text-center'>
                                <div className='d-flex justify-content-center'>
                                    < img
                                        src={"/assets/Company/upload.svg"}
                                        alt="uploadImage"
                                        className='UploadImageIcon'
                                    />
                                </div>
                                <div>
                                    {dragging ? (
                                        <h5 className='UploadFileTextHolder'>Drop files here</h5>
                                    ) : (
                                        <h5 className='UploadFileTextHolder'>Select or drag and drop files</h5>
                                    )}
                                    <h6 className='UploadFileTextHolder'>Upload File</h6>
                                </div>
                            </div>
                        }
                        <div
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                multiple
                                accept="image/*"
                                onClick={(event) => {
                                    event.target.value = null
                                }}
                                onChange={handleFileChange} />
                        </div>

                    </div>
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
                    {Loading ? <LoadingButton /> :
                        <Button type='submit'>
                            Save
                        </Button>
                    }
                </div>
            </form>
        </Container >
    );
};
export default KnowledgeBase