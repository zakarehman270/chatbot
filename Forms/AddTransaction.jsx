import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddTransaction = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        Description: data?.Description,
        Paymentmethod: data?.Paymentmethod,
        Status: data?.Status,
        Amount: data?.Amount,
        Notes: data?.Notes,
        UserBillingAddress: data?.UserBillingAddress,
        UserBillingCity: data?.UserBillingCity,
        UserBillingState: data?.UserBillingState,
        UserBillingZip: data?.UserBillingZip,
        UserCardLast4Digits: data?.UserCardLast4Digits,
        customerID: data?.customerID,
        productID: data?.productID,
        serviceID: data?.serviceID,
        transactionID: "TRX002",
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        Description: false,
        Paymentmethod: false,
        Status: false,
        Amount: false,
        Notes: false,
        UserBillingAddress: false,
        UserBillingCity: false,
        UserBillingState: false,
        UserBillingZip: false,
        UserCardLast4Digits: false,
        customerID: false,
        productID: false,
        serviceID: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            Description: false,
            Paymentmethod: false,
            Status: false,
            Amount: false,
            Notes: false,
            UserBillingAddress: false,
            UserBillingCity: false,
            UserBillingState: false,
            UserBillingZip: false,
            UserCardLast4Digits: false,
            customerID: false,
            productID: false,
            serviceID: false,
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
        if (!Values.Amount) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Amount: true }));
            flag = false;
        }
        if (!Values.Description) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Description: true }));
            flag = false;
        } if (!Values.Notes) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Notes: true }));
            flag = false;
        }
        if (!Values.Paymentmethod) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Paymentmethod: true }));
            flag = false;
        }
        if (!Values.Status) {
            setLocalErrorMessage((prevState) => ({ ...prevState, Status: true }));
            flag = false;
        }
        if (!Values.UserBillingAddress) {
            setLocalErrorMessage((prevState) => ({ ...prevState, UserBillingAddress: true }));
            flag = false;
        }
        if (!Values.UserBillingCity) {
            setLocalErrorMessage((prevState) => ({ ...prevState, UserBillingCity: true }));
            flag = false;
        }
        if (!Values.UserBillingState) {
            setLocalErrorMessage((prevState) => ({ ...prevState, UserBillingState: true }));
            flag = false;
        }
        if (!Values.UserBillingZip) {
            setLocalErrorMessage((prevState) => ({ ...prevState, UserBillingZip: true }));
            flag = false;
        }
        if (!Values.UserCardLast4Digits) {
            setLocalErrorMessage((prevState) => ({ ...prevState, UserCardLast4Digits: true }));
            flag = false;
        }
        if (!Values.customerID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customerID: true }));
            flag = false;
        }
        if (!Values.productID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, productID: true }));
            flag = false;
        }
        if (!Values.serviceID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, serviceID: true }));
            flag = false;
        }
        if(Values.transactionID){
            Values.transactionID = new Date().getUTCMilliseconds();
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "transaction/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "transaction",
                    data: Values
                }))
            }
        }
    };
    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("transaction"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("transaction"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])
    useEffect(() => {
        dispatch(handlerGetAnyData("service"))
        dispatch(handlerGetAnyData("product"))
        dispatch(handlerGetAnyData("customer"))
        return () => { }
    }, [])

    console.log("AllData", AllData)
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Payment Method</label>
                    <SingleSelect
                        options={[
                            { value: 'Card', label: 'Card' },
                            { value: 'Cash', label: 'Cash' },
                            { value: 'Online', label: 'Online' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.Paymentmethod = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.Paymentmethod}
                        borderedRed={localErrorMessage.Paymentmethod}
                    />
                    {localErrorMessage.Paymentmethod && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Status</label>
                    <SingleSelect
                        options={[
                            { value: 'Completed', label: 'Completed' },
                            { value: 'Completed', label: 'Completed' },
                            { value: 'Completed', label: 'Completed' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.Status = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.Status}
                        borderedRed={localErrorMessage.Status}
                    />
                    {localErrorMessage.Status && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Amount</label>
                    <input
                        value={Values.Amount}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.Amount ? 'inputFieldRedColor' : ''}`}
                        placeholder="Amount"
                        type="text"
                        name="Amount"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.Amount && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Users Billing Address</label>
                    <input
                        value={Values.UserBillingAddress}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.UserBillingAddress ? 'inputFieldRedColor' : ''}`}
                        placeholder="Address"
                        type="text"
                        name="UserBillingAddress"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.UserBillingAddress && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Users Billing City</label>
                    <input
                        value={Values.UserBillingCity}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.UserBillingCity ? 'inputFieldRedColor' : ''}`}
                        placeholder="City"
                        type="text"
                        name="UserBillingCity"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.UserBillingCity && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Users Billing State</label>
                    <input
                        value={Values.UserBillingState}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.UserBillingState ? 'inputFieldRedColor' : ''}`}
                        placeholder="State"
                        type="text"
                        name="UserBillingState"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.UserBillingState && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Users Billing Zip</label>
                    <input
                        value={Values.UserBillingZip}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.UserBillingZip ? 'inputFieldRedColor' : ''}`}
                        placeholder="Zip"
                        type="text"
                        name="UserBillingZip"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.UserBillingZip && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Card Number Last 4 digit</label>
                    <input
                        value={Values.UserCardLast4Digits}
                        onChange={(e)=>{
                            const inputValue = parseInt(e.target.value, 10);
                            const limitedValue = inputValue.toString().slice(0, 4);
                            Values.UserCardLast4Digits = limitedValue
                            setValues({...Values})
                        }}
                        className={`form-control ${localErrorMessage.UserCardLast4Digits ? 'inputFieldRedColor' : ''}`}
                        placeholder="Card Number"
                        type="number"
                        name="UserCardLast4Digits"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                        maxLength="4"
                    />
                    {localErrorMessage.UserCardLast4Digits && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Customer</label>
                    <SingleSelect
                        options={(AllData?.customer || []).map((item) => ({
                            value: item,
                            label: item?.firstname + " " + item?.lastname
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.customerID = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.customer?.filter(item => item.id === Values.customerID)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.customerID}
                    />
                    {localErrorMessage.customerID && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Products</label>
                    <SingleSelect
                        options={(AllData?.product || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.productID = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.product?.filter(item => item.id === Values.productID)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.productID}
                    />
                    {localErrorMessage.productID && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">service</label>
                    <SingleSelect
                        options={(AllData?.service || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.serviceID = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.service?.filter(item => item.id === Values.serviceID)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.serviceID}
                    />
                    {localErrorMessage.serviceID && <Alert variant="danger">This field is required</Alert>}
                </div>

                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.Description}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.Description ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        name="Description"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.Description && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Note</label>
                    <textarea
                        value={Values.Notes}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.Notes ? 'inputFieldRedColor' : ''}`}
                        placeholder="Note"
                        type="text"
                        name="Notes"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.Notes && <Alert variant="danger">This field is required</Alert>}
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
export default AddTransaction