import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddLeads = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [Values, setValues] = useState({
        product: data?.product,
        serviceID: data?.serviceID,
        customerID: data?.customerID,
        sessionID: "ABC123",
        reminderDate: data?.reminderDate,
        status: data?.status,
        agent: data?.agent,
        description: data?.agent,
        lead_title: data?.lead_title,
        lead_source: data?.lead_source,
        stage: data?.stage,
        email: data?.email,
        firstname: data?.firstname,
        lastname: data?.lastname,
        othername: data?.othername,
        company: data?.company,
        address: data?.address,
        city: data?.city,
        state: data?.state,
        contact_license_no: "LICENSE123",
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        product: false,
        serviceID: false,
        customerID: false,
        sessionID: false,
        reminderDate: false,
        status: false,
        agent: false,
        description: false,
        lead_title: false,
        lead_source: false,
        stage: false,
        email: false,
        firstname: false,
        lastname: false,
        othername: false,
        company: false,
        address: false,
        city: false,
        state: false,
        contact_license_no: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            product: false,
            serviceID: false,
            customerID: false,
            sessionID: false,
            reminderDate: false,
            status: false,
            agent: false,
            description: false,
            lead_title: false,
            lead_source: false,
            stage: false,
            email: false,
            firstname: false,
            lastname: false,
            othername: false,
            company: false,
            address: false,
            city: false,
            state: false,
            contact_license_no: false,
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
        console.log("Values",Values)
        if (!Values.address) {
            setLocalErrorMessage((prevState) => ({ ...prevState, address: true }));
            flag = false;
        }
        if (!Values.agent) {
            setLocalErrorMessage((prevState) => ({ ...prevState, agent: true }));
            flag = false;
        } if (!Values.city) {
            setLocalErrorMessage((prevState) => ({ ...prevState, city: true }));
            flag = false;
        }
        if (!Values.company) {
            setLocalErrorMessage((prevState) => ({ ...prevState, company: true }));
            flag = false;
        }
        if (!Values.contact_license_no) {
            setLocalErrorMessage((prevState) => ({ ...prevState, contact_license_no: true }));
            flag = false;
        }
        if (!Values.customerID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, customerID: true }));
            flag = false;
        }
        if (!Values.description) {
            setLocalErrorMessage((prevState) => ({ ...prevState, description: true }));
            flag = false;
        }
        if (!Values.email) {
            setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
            flag = false;
        }
        if (!Values.firstname) {
            setLocalErrorMessage((prevState) => ({ ...prevState, firstname: true }));
            flag = false;
        }
        if (!Values.lastname) {
            setLocalErrorMessage((prevState) => ({ ...prevState, lastname: true }));
            flag = false;
        }
        if (!Values.lead_source) {
            setLocalErrorMessage((prevState) => ({ ...prevState, lead_source: true }));
            flag = false;
        }
        if (!Values.lead_title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, lead_title: true }));
            flag = false;
        }
        if (!Values.othername) {
            setLocalErrorMessage((prevState) => ({ ...prevState, othername: true }));
            flag = false;
        }
        if (!Values.product) {
            setLocalErrorMessage((prevState) => ({ ...prevState, product: true }));
            flag = false;
        }
        if (!Values.reminderDate) {
            setLocalErrorMessage((prevState) => ({ ...prevState, reminderDate: true }));
            flag = false;
        }
        if (!Values.serviceID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, serviceID: true }));
            flag = false;
        }
        if (!Values.sessionID) {
            setLocalErrorMessage((prevState) => ({ ...prevState, sessionID: true }));
            flag = false;
        }
        if (!Values.state) {
            setLocalErrorMessage((prevState) => ({ ...prevState, state: true }));
            flag = false;
        }
        if (!Values.status) {
            setLocalErrorMessage((prevState) => ({ ...prevState, status: true }));
            flag = false;
        }
        if (!Values.stage) {
            setLocalErrorMessage((prevState) => ({ ...prevState, stage: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "lead/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "lead",
                    data: Values
                }))
            }
        }
    };

    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("lead"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("lead"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])

    useEffect(() => {
        dispatch(handlerGetAnyData("customer"))
        dispatch(handlerGetAnyData("product"))
        dispatch(handlerGetAnyData("service"))
        return () => { }
    }, [])

    console.log("AllData", AllData)
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Lead Title</label>
                    <input
                        value={Values.lead_title}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.lead_title ? 'inputFieldRedColor' : ''}`}
                        placeholder="lead_title"
                        type="text"
                        name="lead_title"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.lead_title && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Reminder Date</label>
                    <input
                        value={Values.reminderDate}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.reminderDate ? 'inputFieldRedColor' : ''}`}
                        placeholder="reminderDate"
                        type="date"
                        name="reminderDate"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.reminderDate && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                        value={Values.email}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.email ? 'inputFieldRedColor' : ''}`}
                        placeholder="email"
                        type="text"
                        name="email"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.email && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                        value={Values.firstname}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.firstname ? 'inputFieldRedColor' : ''}`}
                        placeholder="firstname"
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
                        placeholder="lastname"
                        type="text"
                        name="lastname"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.lastname && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Other Name</label>
                    <input
                        value={Values.othername}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.othername ? 'inputFieldRedColor' : ''}`}
                        placeholder="othername"
                        type="text"
                        name="othername"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.othername && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Company</label>
                    <input
                        value={Values.company}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.company ? 'inputFieldRedColor' : ''}`}
                        placeholder="company"
                        type="text"
                        name="company"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.company && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Other Name</label>
                    <input
                        value={Values.address}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.address ? 'inputFieldRedColor' : ''}`}
                        placeholder="address"
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
                        placeholder="city"
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
                        placeholder="state"
                        type="text"
                        name="state"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.state && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Status</label>
                    <SingleSelect
                        options={[
                            { value: 'Not started', label: 'Not started' },
                            { value: 'Not started', label: 'Not started' },
                            { value: 'Not started', label: 'Not started' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.status = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.status}
                        borderedRed={localErrorMessage.status}
                    />
                    {localErrorMessage.status && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Lead Source</label>
                    <SingleSelect
                        options={[
                            { value: 'Website', label: 'Website' },
                            { value: 'Website', label: 'Website' },
                            { value: 'Website', label: 'Website' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.lead_source = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.lead_source}
                        borderedRed={localErrorMessage.lead_source}
                    />
                    {localErrorMessage.lead_source && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Stage</label>
                    <SingleSelect
                        options={[
                            { value: 'Prospect', label: 'Prospect' },
                            { value: 'Prospect', label: 'Prospect' },
                            { value: 'Prospect', label: 'Prospect' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.stage = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.stage}
                        borderedRed={localErrorMessage.stage}
                    />
                    {localErrorMessage.stage && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Agent</label>
                    <SingleSelect
                        options={[
                            { value: 'Olivia Bennett', label: 'Olivia Bennett' },
                            { value: 'Ethan Mercer', label: 'Ethan Mercer' },
                            { value: 'Ava Harrison', label: 'Ava Harrison' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.agent = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.agent}
                        borderedRed={localErrorMessage.agent}
                    />
                    {localErrorMessage.agent && <Alert variant="danger">This field is required</Alert>}
                </div>

                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Product</label>
                    {console.log("AllData",AllData)}
                    <SingleSelect
                        options={(AllData?.product || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.product = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.product?.filter(item => item.id === Values.parent_customer)
                                .map(item => ({ label: item?.firstname + " " + item?.lastname, value: item.id }))
                        }
                        borderedRed={localErrorMessage.parent_customer}
                    />
                    {localErrorMessage.agent && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Service</label>
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
                                .map(item => ({ label: item?.firstname + " " + item?.lastname, value: item.id }))
                        }
                        borderedRed={localErrorMessage.serviceID}
                    />
                    {localErrorMessage.serviceID && <Alert variant="danger">This field is required</Alert>}
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
                                .map(item => ({ label: item?.firstname + " " + item?.lastname, value: item.id }))
                        }
                        borderedRed={localErrorMessage.customerID}
                    />
                    {localErrorMessage.customerID && <Alert variant="danger">This field is required</Alert>}
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
export default AddLeads