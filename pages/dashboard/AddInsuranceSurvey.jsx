import React, { useState, useEffect } from 'react';
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import LoadingButton from '@/common/LoadingButton';
import { Container, Alert } from 'react-bootstrap';
import { HandlerAddCompanyData } from '@/Redux/GeneralCrudOperation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import SingleSelect from '@/common/customSingleSelect';
const AddInsuranceSurvey = () => {
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
                    <div className='d-flex justify-content-between align-items-center mt-2'>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Add Insurance Survey
                        </Typography>
                    </div>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <label className="form-label">First Name</label>
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
                            <label className="form-label">Last Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Last Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Company Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Company Name"
                                type="text"
                                name="c_name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Email Address"
                                type="text"
                                name="email"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                            <label className="form-label">Phone</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Phone"
                                type="text"
                                name="phone"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
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
                        <div className="col-md-6 SelectSingleDropdownInModal">
                            <label className="form-label">State</label>
                            <SingleSelect
                                options={[
                                    { value: 'California', label: 'California' },
                                    { value: 'New York', label: 'New York ' },
                                    { value: 'Texas', label: 'Texas ' },
                                    { value: 'Colorado', label: 'Colorado ' },
                                    { value: 'Illinois', label: 'Illinois ' },
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
                            <label className="form-label">Product</label>
                            <SingleSelect
                                options={[
                                    { value: 'Artisan Contractors', label: 'Artisan Contractors' },
                                    { value: 'Specialty Contractors', label: 'Specialty Contractors ' },
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
                        <div className="col-md-6">
                            <label className="form-label">Zip</label>
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
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Contractor Insurance Survey
                        </Typography>

                        <div className=''>
                            <div className="col-md-12">
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you perform any residential work? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you perform any commercial work? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you have employee? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you use a vehicle in your work , or do your employee, if any, use their own vehicle for their work?  </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you work on property with a value greater than $1,000,000 </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you rent equipment or do your tools and equipment add up to more than $10,000? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you own or rent a office , wherehouse, or yard facility other than your home? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you maintain all license as required by any local or state authorities for providing contracting service? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Are you a General Contractor that performs remodeling or addition , or new ground up construction residential or commercial building </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you perform any following service: Design Build, architectural , engineering service or construction management for a fee? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do directly or through your website collect any personal information from your customer, credit card information , phone number , address , checking account, driver license , social security , date of birth ? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you store , transport , or use on the jobsite any pollutants? </label>
                                </div>
                                <div className='d-flex align-items-center gap-2 outerWrapperCheckBox mt-2'>
                                    <input className="form-check-input code-switcher SwitcherButton" type="checkbox" />
                                    <label htmlFor="switch_customer" className='d-block SwitchLabel'>  Do you use subcontractors? </label>
                                </div>
                            </div>
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
export default AddInsuranceSurvey