import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { HandlerAddProducts, HandlerAddServiceData } from '@/Redux/GeneralCrudOperation';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { ResetAddService, ResetUpdatedService, handlerAddService, handlerGetListService, handlerUpdateService } from '@/Redux/Service';
import { handlerGetProducts } from '@/Redux/Products';
import { handlerGetCategories } from '@/Redux/Category';
const AddService = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
    const { AddServiceData, UpdatedService, loading } = useSelector((state) => state.Service);
    const { getListCategories } = useSelector((state) => state.Category);
    const { getListProducts } = useSelector((state) => state.Products);
    const [Values, setValues] = useState({
        title: data?.title,
        description: data?.description,
        category: data?.category,
        product: data?.product,
        image: data?.image,
        price: data?.price,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
        price: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            price: false
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
        } if (!Values.price) {
            setLocalErrorMessage((prevState) => ({ ...prevState, price: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                dispatch(handlerUpdateService({
                    id:data.id,
                    data:Values
                }))
            } else {
                setLoading(true);
                dispatch(handlerAddService(Values))
            }
        }
    };
    useEffect(() => {
        if (AddServiceData) {
            toast.success("Successfully Added Service")
            dispatch(handlerGetListService())
            handleClose()
        }
        dispatch(ResetAddService())
        return () => {
        }
    }, [AddServiceData])

    useEffect(() => {
        if (UpdatedService) {
            toast.success("Successfully Updated Service")
            dispatch(handlerGetListService())
            handleClose()
        }
        dispatch(ResetUpdatedService())
        return () => {
        }
    }, [UpdatedService])

    useEffect(() => {
        dispatch(handlerGetCategories())
        dispatch(handlerGetProducts())
        return () => {
        }
    }, [])


    const handleFileChange = (e) => {
        const imageFile = e.target.files[0];
        const imageURL = URL.createObjectURL(imageFile);
        if (imageFile) {
            Values.image = imageURL
            setValues({ ...Values });
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
                    <label className="form-label">Category</label>
                    <SingleSelect
                        options={(getListCategories || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.category = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            getListCategories?.filter(item => item.id === Values.category)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={""}
                    />
                </div>

                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Related product</label>
                    <SingleSelect
                        options={(getListProducts || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.product = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            getListProducts?.filter(item => item.id === Values.product)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={""}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input
                        value={Values.price}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.price ? 'inputFieldRedColor' : ''}`}
                        placeholder="Price"
                        type="number"
                        name="price"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.price && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Uploads image/file</label>
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
export default AddService