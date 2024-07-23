import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ResetAddAnyData, handlerAddAnyData } from '@/Redux/AddAnyData';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const AddStaff = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    const { AddAnyData, loading } = useSelector((state) => state.AddAnyData);
    const [RePassword, setRePassword] = useState()
    const [LocalError, setLocalError] = useState(false)
    const [active, setActive] = useState(false);
    const [Values, setValues] = useState({
        email: data?.email,
        password: data?.password,
        department: data?.department,
        role: data?.role,
        phone: data?.phone,
        address: data?.address,
        city: data?.city,
        state: data?.state,
        zip_code: data?.zip_code,
        firstName: data?.firstName,
        lastName: data?.lastName,
        permission: data?.permission,
        category: data?.category,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        email: false,
        password: false,
        department: false,
        role: false,
        phone: false,
        address: false,
        city: false,
        state: false,
        zip_code: false,
        firstName: false,
        lastName: false,
        category: false,
        RePassword: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            email: false,
            password: false,
            department: false,
            role: false,
            phone: false,
            address: false,
            city: false,
            state: false,
            zip_code: false,
            firstName: false,
            lastName: false,
            category: false,
            RePassword: false
        });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        resetValidation();
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setLocalError(false)
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let flag = true;
        setLocalError(false)
        // Validate the form fields before submission
        if (!Values.address) {
            setLocalErrorMessage((prevState) => ({ ...prevState, address: true }));
            flag = false;
        }
        console.log("Values", Values)
        if (!Values.category) {
            setLocalErrorMessage((prevState) => ({ ...prevState, category: true }));
            flag = false;
        } if (!Values.city) {
            setLocalErrorMessage((prevState) => ({ ...prevState, city: true }));
            flag = false;
        } if (!Values.department) {
            setLocalErrorMessage((prevState) => ({ ...prevState, department: true }));
            flag = false;
        } if (!Values.email) {
            setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
            flag = false;
        } if (!Values.firstName) {
            setLocalErrorMessage((prevState) => ({ ...prevState, firstName: true }));
            flag = false;
        } if (!Values.lastName) {
            setLocalErrorMessage((prevState) => ({ ...prevState, lastName: true }));
            flag = false;
        } if (!Values.password) {
            setLocalErrorMessage((prevState) => ({ ...prevState, password: true }));
            flag = false;
        } if (!Values.phone) {
            setLocalErrorMessage((prevState) => ({ ...prevState, phone: true }));
            flag = false;
        } if (!Values.role) {
            setLocalErrorMessage((prevState) => ({ ...prevState, role: true }));
            flag = false;
        } if (!Values.state) {
            setLocalErrorMessage((prevState) => ({ ...prevState, city: true }));
            flag = false;
        } if (!Values.zip_code) {
            setLocalErrorMessage((prevState) => ({ ...prevState, zip_code: true }));
            flag = false;
        }
        if (!RePassword) {
            setLocalErrorMessage((prevState) => ({ ...prevState, RePassword: true }));
            flag = false;
        }

        if (RePassword !== Values.password) {
            setLocalError(true)
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url: "staff/update",
                }))
            } else {
                dispatch(handlerAddAnyData({
                    url: "staff",
                    data: Values
                }))
            }
        }
    };

    useEffect(() => {
        if (AddAnyData) {
            handleClose()
            dispatch(handlerGetAnyData("staff"))
        }
        dispatch(ResetAddAnyData())
        return () => { }
    }, [AddAnyData])
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            dispatch(handlerGetAnyData("staff"))
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])

    useEffect(() => {
        dispatch(handlerGetAnyData("category"))
        dispatch(handlerGetAnyData("departments"))
        return () => { }
    }, [])

    const handleToggle = () => {
        setActive(!active);
        Values.permission = !active
        setValues({ ...Values })
        resetValidation()
    };



    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input
                        value={Values.firstName}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.firstName ? 'inputFieldRedColor' : ''}`}
                        placeholder="First Name"
                        type="text"
                        name="firstName"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.firstName && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Lats Name</label>
                    <input
                        value={Values.lastName}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.lastName ? 'inputFieldRedColor' : ''}`}
                        placeholder="Lats Name"
                        type="text"
                        name="lastName"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.lastName && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Category</label>
                    <SingleSelect
                        options={(AllData?.category || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.category = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.category?.filter(item => item.id === Values.category)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.category && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Role</label>
                    <SingleSelect
                        options={[
                            { value: 'Admin', label: 'Admin' },
                            { value: 'Staff', label: 'Staff' },
                        ]}
                        handlerSelectedOption={(options) => {
                            Values.role = options.value
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={Values.role}
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.role && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6 SelectSingleDropdownInModal">
                    <label className="form-label">Department</label>
                     <SingleSelect
                        options={(AllData?.departments || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.department = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            AllData?.departments?.filter(item => item.id === Values.department)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.department && <Alert variant="danger">This field is required</Alert>}
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
                        placeholder="Zip Code"
                        type="text"
                        name="zip_code"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.zip_code && <Alert variant="danger">This field is required</Alert>}
                </div>

                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input
                        value={Values.password}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.password ? 'inputFieldRedColor' : ''}`}
                        placeholder="Zip Code"
                        type="text"
                        name="password"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.password && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Re Type Password</label>
                    <input
                        value={RePassword}
                        onChange={(e) => {
                            setRePassword(e.target.value)
                        }}
                        className={`form-control ${localErrorMessage.RePassword ? 'inputFieldRedColor' : ''}`}
                        placeholder="Zip Code"
                        type="text"
                        name="RePassword"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.RePassword && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Select Permission</label>
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
                        <label htmlFor="switch_customer" className='d-block '> Permission </label>
                    </div>
                </div>

                {LocalError && <Alert variant="danger">Password Does Not Match</Alert>}
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
export default AddStaff