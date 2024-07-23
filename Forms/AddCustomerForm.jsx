import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import SingleSelect from '@/common/customSingleSelect';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
const AddCustomerForm = ({ data, handleClose }) => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData , loading } = useSelector((state) => state.AddAnyData);
    const dispatch = useDispatch();
    const [Values, setValues] = useState({
        firstname: data?.firstname,
        lastname: data?.lastname,
        address: data?.address,
        phone: data?.phone,
        email: data?.email,
        city: data?.city,
        state: data?.state,
        zip_code: data?.zip_code,
        company_name: data?.company_name,
        designation: data?.designation,
        parent_customer: data?.parent_customer,
        description: data?.description,
    });
    let URL = "customer"
    const [localErrorMessage, setLocalErrorMessage] = useState({
        firstname: false,
        lastname: false,
        address: false,
        phone: false,
        email: false,
        city: false,
        state: false,
        zip_code: false,
        company_name: false,
        designation: false,
        parent_customer: false,
        description: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            firstname: false,
            lastname: false,
            address: false,
            phone: false,
            email: false,
            city: false,
            state: false,
            zip_code: false,
            company_name: false,
            designation: false,
            parent_customer: false,
            description: false,
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
        if (!Values.firstname) {
            setLocalErrorMessage((prevState) => ({ ...prevState, firstname: true }));
            flag = false;
        } if (!Values.lastname) {
            setLocalErrorMessage((prevState) => ({ ...prevState, lastname: true }));
            flag = false;
        }
        if (!Values.email) {
            setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
            flag = false;
        }
        if (!Values.city) {
            setLocalErrorMessage((prevState) => ({ ...prevState, city: true }));
            flag = false;
        }
        if (!Values.state) {
            setLocalErrorMessage((prevState) => ({ ...prevState, state: true }));
            flag = false;
        }
        if (!Values.company_name) {
            setLocalErrorMessage((prevState) => ({ ...prevState, company_name: true }));
            flag = false;
        }
        if (!Values.designation) {
            setLocalErrorMessage((prevState) => ({ ...prevState, designation: true }));
            flag = false;
        }
        if (!Values.parent_customer) {
            setLocalErrorMessage((prevState) => ({ ...prevState, parent_customer: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url:"customer/update",
                }))
            } else {
                dispatch(handlerAddAnyData( {
                    url:URL,
                    data:Values
                }))
            }
        }
    };
    useEffect(() => {
      if(AddAnyData){
        handleClose()
        dispatch(handlerGetAnyData("customer"))
      }
      dispatch(ResetAddAnyData())
      return () => { }
    }, [AddAnyData])

      useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("customer"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                        value={Values.firstname}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.firstname ? 'inputFieldRedColor' : ''}`}
                        placeholder="First Name"
                        type="text"
                        name="firstname"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.firstname && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input
                        value={Values.lastname}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.lastname ? 'inputFieldRedColor' : ''}`}
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.lastname && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                        value={Values.email}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.email ? 'inputFieldRedColor' : ''}`}
                        placeholder="Email"
                        type="text"
                        name="email"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.email && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                        value={Values.phone}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.phone ? 'inputFieldRedColor' : ''}`}
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.phone && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Address</label>
                    <input
                        value={Values.address}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.address ? 'inputFieldRedColor' : ''}`}
                        placeholder="Address"
                        type="text"
                        name="address"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.address && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                        value={Values.city}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.city ? 'inputFieldRedColor' : ''}`}
                        placeholder="City"
                        type="text"
                        name="city"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.city && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">State</label>
                    <input
                        value={Values.state}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.state ? 'inputFieldRedColor' : ''}`}
                        placeholder="State"
                        type="text"
                        name="state"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.state && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Zip Code</label>
                    <input
                        value={Values.zip_code}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.zip_code ? 'inputFieldRedColor' : ''}`}
                        placeholder="Zip"
                        type="text"
                        name="zip_code"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.zip_code && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Company</label>
                    <input
                        value={Values.company_name}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.company_name ? 'inputFieldRedColor' : ''}`}
                        placeholder="Company"
                        type="text"
                        name="company_name"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.company_name && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Designation</label>
                    <input
                        value={Values.designation}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.designation ? 'inputFieldRedColor' : ''}`}
                        placeholder="Designation"
                        type="text"
                        name="designation"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.designation && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Parent Customer </label>
                    <SingleSelect
                        options={(AllData?.customer || []).map((item) => ({
                            value: item,
                            label: item?.firstname + " " + item?.lastname 
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.parent_customer = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.customer?.filter(item => item.id === Values.parent_customer)
                                .map(item => ({ label: item?.firstname + " " + item?.lastname , value: item.id }))
                        }
                        borderedRed={localErrorMessage.parent_customer}
                    />
                    {localErrorMessage.parent_customer && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.description}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.description ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        Name="description"
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
export default AddCustomerForm