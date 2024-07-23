import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import {
    Button, Card, Typography,
    CardBody,
} from '@material-tailwind/react';
import {  Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import MyEditor from '@/components/RichTextEditor';
import { Link, useNavigate } from 'react-router-dom';
import { ResetAddProducts, handlerAddProducts } from '@/Redux/Products';
const AddProductsForm = ({ }) => {
    const { AddProducts } = useSelector((state) => state.Products);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);
    const [ActiveAvailableToSpecificUsers, setActiveAvailableToSpecificUsers] = useState(false)
    const [Values, setValues] = useState({
        title: "", 
        description: "", 
        category: "", 
        img: "", 
        user: "", 
        main_image: "", 
        multiple_images: "", 
        stateSpecific: "", 
        OnlyAvailableToSpecificUsers: "", 
        coverageOptions: "", 
        policyFeatures: "", 
        policyFeatures: "", 
        state: "", 
        pricing: [] 
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
        description: false,
        category: false,
        State: false,
        img: false,
        user: false,
        main_image: false,
        multiple_images: false,
        stateSpecific: false,
        OnlyAvailableToSpecificUsers: false,
        coverageOptions: false,
        policyFeatures: false,
        policyFeatures: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            description: false,
            category: false,
            State: false,
            img: false,
            user: false,
            main_image: false,
            multiple_images: false,
            stateSpecific: false,
            OnlyAvailableToSpecificUsers: false,
            coverageOptions: false,
            policyFeatures: false,
            policyFeatures: false
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
    const [ListAddOn, setListAddOn] = useState(
        [
            {
                label1: "Package Name",
                label2: "price",
                label3: "Details",
                value2: "",
                value1: "",
                value3: "",
                id: 0
            }
        ])
    const handleToggle = () => {
        setActive(!active);
        Values.stateSpecific = !active
        setValues({ ...Values })
        resetValidation()
    };
    const handleToggleActiveAvailableToSpecificUsers = () => {
        Values.OnlyAvailableToSpecificUsers = !ActiveAvailableToSpecificUsers
        setValues({ ...Values })
        setActiveAvailableToSpecificUsers(!ActiveAvailableToSpecificUsers)
        resetValidation()
    };

    const onSubmit = (e) => {
        e.preventDefault();
        let flag = true;
        // Validate the form fields before submission
        if (!Values.OnlyAvailableToSpecificUsers) {
            setLocalErrorMessage((prevState) => ({ ...prevState, OnlyAvailableToSpecificUsers: true }));
            flag = false;
        }
        if (!Values.State) {
            setLocalErrorMessage((prevState) => ({ ...prevState, State: true }));
            flag = false;
        } if (!Values.category) {
            setLocalErrorMessage((prevState) => ({ ...prevState, category: true }));
            flag = false;
        }
        if (!Values.coverageOptions) {
            setLocalErrorMessage((prevState) => ({ ...prevState, coverageOptions: true }));
            flag = false;
        }
        if (!Values.img) {
            setLocalErrorMessage((prevState) => ({ ...prevState, img: true }));
            flag = false;
        }
        if (!Values.policyFeatures) {
            setLocalErrorMessage((prevState) => ({ ...prevState, policyFeatures: true }));
            flag = false;
        }
        if (!Values.stateSpecific) {
            setLocalErrorMessage((prevState) => ({ ...prevState, stateSpecific: true }));
            flag = false;
        }
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        }
        if (!Values.user) {
            setLocalErrorMessage((prevState) => ({ ...prevState, user: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            dispatch(handlerAddProducts(Values))
        }
    };

    useEffect(() => {
      if(AddProducts){
        toast.success("Successfully Added Products")
        navigate("/")
      }
      dispatch(ResetAddProducts())
      return () => {
      }
    }, [AddProducts])
    



    return (
        <Card className="mt-3">
            <CardBody className="">
                <Typography variant="h3" color="blue-gray" className="mb-2">
                    Add Product
                </Typography>
                <form className="row g-3" onSubmit={onSubmit}>
                    <div className="col-md-6">
                        <label className="form-label">Product Title</label>
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
                            options={[
                                { value: 'Artisan Contractors', label: 'Artisan Contractors' },
                                { value: 'Specialty Contractors ', label: 'Specialty Contractors ' },
                            ]}
                            handlerSelectedOption={(options) => {
                                Values.category = options.value
                                setValues({ ...Values })
                                resetValidation()
                            }}
                            defaultSelected={Values.category}
                            borderedRed={localErrorMessage.category}
                        />
                        {localErrorMessage.category && <Alert variant="danger">This field is required</Alert>}
                    </div>
                    <div className="col-md-6 SelectSingleDropdownInModal">
                        <label className="form-label">Select User</label>
                        <SingleSelect ImageSource={"/assets/icons/DropDownIcon.svg"} options={[
                            { value: 'ShadowPulse', label: 'ShadowPulse' },
                            { value: 'MysticCipher', label: 'MysticCipher' },
                            { value: 'EchoPhantom', label: 'EchoPhantom' },
                            { value: 'QuantumWanderer', label: 'QuantumWanderer' },
                            { value: 'NebulaWhisper', label: 'NebulaWhisper' },
                            { value: 'CipherVortex', label: 'Friday' },
                            { value: 'Saturday', label: 'Saturday' },
                        ]}
                            handlerSelectedOption={(options) => {
                                Values.user = options.value
                                setValues({ ...Values })
                                resetValidation()
                            }}
                        />
                        {localErrorMessage.user && <Alert variant="danger">This field is required</Alert>}
                    </div>
                    <div className="col-md-6 SelectSingleDropdownInModal">
                        <label className="form-label">Select State</label>
                        <SingleSelect ImageSource={"/assets/icons/DropDownIcon.svg"} options={[
                            { value: 'Alabama', label: 'Alabama' },
                            { value: 'Alaska', label: 'Alaska' },
                            { value: 'Arizona', label: 'Arizona' },
                            { value: 'Arkansas', label: 'Arkansas' },
                            { value: 'Connecticut', label: 'Connecticut' },
                        ]}
                            handlerSelectedOption={(options) => {
                                Values.state = options.value
                                setValues({ ...Values })
                                resetValidation()
                            }}
                        />
                        {localErrorMessage.state && <Alert variant="danger">This field is required</Alert>}
                    </div>

                    <div className="col-md-12">
                        <label className="form-label">Main Image</label>
                        <input
                            value={Values.main_image}
                            onChange={handleChange}
                            className={`form-control ${localErrorMessage.main_image ? 'inputFieldRedColor' : ''}`}
                            placeholder="Main Image"
                            type="file"
                            name="main_image"
                            aria-autocomplete="list"
                            autoCorrect="off"
                            min="0"
                        />
                        {localErrorMessage.main_image && <Alert variant="danger">This field is required</Alert>}
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex align-items-center gap-2'>
                            <label className={`switch ${active ? 'active' : ''}`} htmlFor={"switch_customer"}>
                                <input
                                    type="checkbox"
                                    checked={active}
                                    name='switch_customer'
                                    id='switch_customer'
                                    aria-autocomplete="list"
                                    autoCorrect="off"
                                    onChange={handleToggle} />
                                <span className="slider round">
                                </span>
                            </label>
                            <label htmlFor="switch_customer" className='d-block '> State specific </label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='d-flex align-items-center gap-2'>
                            <input className="form-check-input code-switcher"
                                type="checkbox"
                                checked={ActiveAvailableToSpecificUsers}
                                name='switch_customer'
                                id='ActiveAvailableToSpecificUsers'
                                aria-autocomplete="list"
                                autoCorrect="off"
                                onChange={handleToggleActiveAvailableToSpecificUsers}
                            />
                            <label htmlFor="ActiveAvailableToSpecificUsers" className='d-block '>   Only available to specific users </label>
                        </div>
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
                        <label className="form-label">Coverage options</label>
                        <MyEditor setValue={(value) => {
                            Values.coverageOptions = value
                            setValues({ ...Values })
                        }} />
                        {localErrorMessage.coverageOptions && <Alert variant="danger">This field is required</Alert>}
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Policy features</label>
                        <MyEditor setValue={(value) => {
                            Values.policyFeatures = value
                            setValues({ ...Values })
                        }} />
                        {localErrorMessage.policyFeatures && <Alert variant="danger">This field is required</Alert>}
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
                    {<div className=' mt-3'>
                        <div className='d-flex justify-content-between'>
                            <Typography variant="h6" color="blue-gray" className="mb-2">
                                Pricing
                            </Typography>
                            <Button type='button' onClick={() => {
                                ListAddOn.push(
                                    {
                                        label1: "Package Name",
                                        label2: "price",
                                        label3: "Details",
                                        value2: "",
                                        value1: "",
                                        value3: "",
                                        id: 0
                                    }
                                )
                                setListAddOn([...ListAddOn])
                            }}>
                                Add New
                            </Button>
                        </div>
                        {ListAddOn.map((item, index) => {
                            return (
                                <div className='row' key={index}>
                                    {index > 0 && <div className='d-flex justify-content-end mt-2'>
                                        <img
                                            src='/assets/icons/trash.svg'
                                            onClick={() => {
                                                ListAddOn.splice(index, 1)
                                                setListAddOn([...ListAddOn])
                                            }}
                                            className='c_pointer'
                                        />

                                    </div>}
                                    <div key={index} className="col-md-6 pt-0 mt-0">
                                        <label className="form-label" htmlFor={item?.label1}>{item?.label1}</label>
                                        <input type="text"
                                            className={`form-control`}
                                            placeholder="Enter Package Name"
                                            name="Enter_Additional_Services_Add_service"
                                            id='Enter_Additional_Services_Add_service'
                                            aria-autocomplete="list"
                                            autoCorrect="off"
                                            value={item?.value1}
                                            onChange={(e) => {
                                                ListAddOn[index].value1 = e.target.value
                                                setListAddOn([...ListAddOn])
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 pt-0 mt-0">
                                        <label className="form-label" htmlFor={item?.label2} >{item?.label2}</label>
                                        <input type="text"
                                            className={`form-control ${item?.validation2 ? "inputFieldRedColor" : ""}`}
                                            placeholder='Enter Service Price'
                                            value={item?.value2}
                                            name="Enter_Service_Price_Add_service"
                                            id='Enter_Service_Price_Add_service'
                                            aria-autocomplete="list"
                                            autoCorrect="off"
                                            onChange={(e) => {
                                                ListAddOn[index].value2 = e.target.value
                                                setListAddOn([...ListAddOn])
                                            }}
                                        />
                                        {item?.validation2 && <Alert variant="danger">
                                            This field is required
                                        </Alert>
                                        }
                                    </div>
                                    <div className="col-md-12 pt-0 mt-2">
                                        <label className="form-label" htmlFor={item?.label3} >{item?.label3}</label>
                                        <textarea type="text"
                                            className={`form-control ${item?.validation3 ? "inputFieldRedColor" : ""}`}
                                            placeholder='Enter Service Price'
                                            value={item?.value3}
                                            name="Enter_Service_Price_Add_service"
                                            id='Enter_Service_Price_Add_service'
                                            aria-autocomplete="list"
                                            autoCorrect="off"
                                            onChange={(e) => {
                                                ListAddOn[index].value3 = e.target.value
                                                setListAddOn([...ListAddOn])
                                            }}
                                            rows={5}
                                        />
                                        {item?.validation2 && <Alert variant="danger">
                                            This field is required
                                        </Alert>
                                        }
                                    </div>
                                </div>
                            )
                        })}

                    </div>}
                    <div className=" d-flex justify-content-end gap-2">
                        <Link to="/dashboard/product">
                            <Button type='button' className='buttonUnActive text-unset' onClick={() => {

                            }}>
                                Cancel
                            </Button>
                        </Link>
                        {Loading ? <LoadingButton /> :
                            <Button type='submit'>
                                Save
                            </Button>
                        }
                    </div>
                </form>
            </CardBody>
        </Card>
    );
};
export default AddProductsForm