import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import LoadingButton from '@/common/LoadingButton';
import { Alert } from 'react-bootstrap';
import { HandlerAddCompanyData } from '@/Redux/GeneralCrudOperation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const AddClaims = () => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
    const [Values, setValues] = useState({
        name: "",
        address: "",
        phone: "",
        website: "",
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        name: false,
        address: false,
        phone: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            name: false,
            address: false,
            phone: false
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
        if (!Values.address) {
            setLocalErrorMessage((prevState) => ({ ...prevState, address: true }));
            flag = false;
        }
        if (!Values.name) {
            setLocalErrorMessage((prevState) => ({ ...prevState, name: true }));
            flag = false;
        } if (!Values.phone) {
            setLocalErrorMessage((prevState) => ({ ...prevState, phone: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdate(Values))
            } else {
                setLoading(true)
                dispatch(HandlerAddCompanyData(Values))
            }
        }
    };

    useEffect(() => {
        if (Loading) {
            const timeoutId = setTimeout(() => {
                // After 2 seconds, set loading back to false
                setLoading(false);
                handleClose()
                toast.success("Successfully Added Company")
            }, 1500);
            return () => {
                clearTimeout(timeoutId);
            }; // 2000 milliseconds = 2 seconds
        }
        // Cleanup the timeout if the component unmounts before the 2 seconds
    }, [Loading]);
    return (
        <div>
            <Card className='mt-3 pb-3'>
                <CardBody className=" px-4 pt-0 pb-2">
                    <div className=' mt-2'>
                        <Typography variant="h6" color="blue-gray" className="">
                            Occurence
                        </Typography>
                        <Typography variant="h7" color="blue-gray" className="LocationofOccurence">
                            Location of  Occurence
                        </Typography>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-4">
                            <label className="form-label">Street</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Street"
                                type="text"
                                name="street"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">City</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="City"
                                type="text"
                                name="city"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Zip Code</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Zip Code"
                                type="text"
                                name="z_code"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Description</label>
                            <textarea
                                value={Values.Message}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.Message ? 'inputFieldRedColor' : ''}`}
                                placeholder="Description"
                                type="text"
                                Name="message"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                rows={5}
                            />
                            {localErrorMessage.Message && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <hr />
                        <div className=' mt-2'>
                            <Typography variant="h6" color="blue-gray" className="">
                                Injured / Property Damaged
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="LocationofOccurence">
                                Injured Details
                            </Typography>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Address</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Address"
                                type="text"
                                name="address"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Repeated By</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Reapted By"
                                type="text"
                                name="reapted_by"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Remark</label>
                            <textarea
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Remark"
                                type="text"
                                name="remark"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                                rows={4}
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className=' mt-2'>
                            <Typography variant="h6" color="blue-gray" className="">
                                Claimant Details
                            </Typography>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Claimant</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Contact Number</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className=' mt-2'>
                            <Typography variant="h6" color="blue-gray" className="">
                                Claim Adjuster Details
                            </Typography>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Adjuster Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Adjuster Number</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Adjuster Email</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className=' mt-2'>
                            <Typography variant="h6" color="blue-gray" className="">
                                Upload File
                            </Typography>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Claim Form</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="file"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Photo</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="file"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Carrier Response</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="file"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Denial Letter</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="file"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Correspondence</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="file"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className=' mt-2'>
                            <Typography variant="h6" color="blue-gray" className="">
                                Claim Details
                            </Typography>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Claim Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Policy Number</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Claim Number</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date Loss</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="date"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date Reporterd</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="date"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Status</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">RSVR</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Paid RSVR</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date Paid RSVR</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="date"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Expiry RSVR</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="date"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Paid Exv</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date Paid Exp</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="date"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Total Incr Loss</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="First Name"
                                type="input"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
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
                </CardBody>
            </Card>
        </div>
    )
}
export default AddClaims