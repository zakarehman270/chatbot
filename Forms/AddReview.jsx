import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const CustomStarRating = ({ starCount, fillColor, emptyColor , handlerChange }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    const handleStarClick = (clickedStar) => {
        setSelectedStars(clickedStar);
        console.log("hello,,,",clickedStar)
        handlerChange(clickedStar)
    };
    return (
        <div className='d-flex'>
            {[...Array(starCount)].map((_, index) => (
                <span
                    key={index}
                    onClick={() => handleStarClick(index + 1)}
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                >
                    {index + 1 <= selectedStars ? (

                        <FaStar color={emptyColor} className='customsize' />
                    ) : (
                        <CiStar color={fillColor} className='customsize' />
                    )}
                </span>
            ))}
        </div>
    );
};
const AddReview = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        customer_email: data?.customer_email,
        customer_name: data?.customer_name,
        customer_phone: data?.customer_phone,
        reference_session_id: data?.reference_session_id,
        channel_name: data?.channel_name,
        customer_rating:data?.customer_rating,
        customer_comments:data?.customer_comments,
        user:1
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        customer_email:  false,
        customer_name: false,
        customer_phone:  false,
        reference_session_id: false,
        channel_name: false,
        customer_rating:false,
        customer_comments:false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            customer_email:  false,
            customer_name: false,
            customer_phone:  false,
            reference_session_id: false,
            channel_name: false,
            customer_rating:false,
            customer_comments:false,
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
        if (!Values.channel_name) {
            setLocalErrorMessage((prevState) => ({ ...prevState, channel_name: true }));
            flag = false;
        }
        if (!Values.customer_comments) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customer_comments: true }));
            flag = false;
        } if (!Values.customer_email) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customer_email: true }));
            flag = false;
        }  if (!Values.customer_name) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customer_name: true }));
            flag = false;
        }
        if (!Values.customer_phone) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customer_phone: true }));
            flag = false;
        } 
        if (!Values.customer_rating) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customer_rating: true }));
            flag = false;
        } 
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "customer-satisfaction",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "customer-satisfaction",
                    data: Values
                }))
            }
        }
    };

    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("customer-satisfaction"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("customer-satisfaction"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])

    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Customer Full Name</label>
                    <input
                        value={Values.customer_name}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.customer_name ? 'inputFieldRedColor' : ''}`}
                        placeholder="Full Name"
                        type="text"
                        name="customer_name"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.customer_name && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Customer Email Address</label>
                    <input
                        value={Values.customer_email}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.customer_email ? 'inputFieldRedColor' : ''}`}
                        placeholder="Email Address"
                        type="email"
                        name="customer_email"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.customer_email && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Customer Phone</label>
                    <input
                        value={Values.customer_phone}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.customer_phone ? 'inputFieldRedColor' : ''}`}
                        placeholder="Phone Number"
                        type="number"
                        name="customer_phone"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.customer_phone && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Channel Name</label>
                    <SingleSelect
                        options={[
                            { value: 'Chat', label: 'Chat' },
                            { value: 'Phone', label: 'Phone' },
                            { value: 'Email', label: 'Email' },
                            { value: 'Mobile App', label: 'Mobile App' },
                            { value: 'Website', label: 'Website' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.channel_name = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.channel_name}
                        borderedRed={localErrorMessage.channel_name}
                    />
                    {localErrorMessage.channel_name && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12 SelectSingleDropdownInModal">
                    <label className="form-label">Rating</label>
                    <div>
                        <CustomStarRating starCount={5} fillColor="#0f6ca5" emptyColor="#0f6ca5" 
                         handlerChange={(e)=>{
                            console.log("e",e)
                            Values.customer_rating = e
                            setValues({...Values})
                         }}
                        />
                    </div>
                    {localErrorMessage.customer_rating && <Alert variant="danger">Rating is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Comments</label>
                    <textarea
                        value={Values.customer_comments}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.customer_comments ? 'inputFieldRedColor' : ''}`}
                        placeholder="Comments"
                        type="text"
                        name="customer_comments"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.customer_comments && <Alert variant="danger">This field is required</Alert>}
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
export default AddReview