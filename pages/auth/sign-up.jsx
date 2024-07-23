import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import ReactLoading from 'react-loading';
import { Container, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import SingleSelect from '@/common/customSingleSelect';
import { handlerRegister, updatedRegister } from '@/Redux/Auth';
import { handlerGetDepartment } from '@/Redux/Departments';
export function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, errorMessage, Register } = useSelector((state) => state.Auth);
  const { getListDepartment } = useSelector((state) => state.Departments);
  const [ConfirmPassword, setConfirmPassword] = useState()
  const [PasswordErrorMessage, setPasswordErrorMessage] = useState(false)
  const [PasswordVisible2, setPasswordVisible2] = useState(true)
  const [PasswordVisible1, setPasswordVisible1] = useState(true)
  const [Values, setValues] = useState({
    email: "",
    password: "",
    phone: "",
    department: "",
    role: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
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
    ConfirmPassword: false,
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
      ConfirmPassword: false
    });
    setPasswordErrorMessage(false)
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
    setPasswordErrorMessage(false)
    e.preventDefault();
    let flag = true;
    if (!Values.address) {
      setLocalErrorMessage((prevState) => ({ ...prevState, address: true }));
      flag = false;
    }
    if (!Values.city) {
      setLocalErrorMessage((prevState) => ({ ...prevState, city: true }));
      flag = false;
    } if (!Values.department) {
      setLocalErrorMessage((prevState) => ({ ...prevState, department: true }));
      flag = false;
    }
    if (!Values.email) {
      setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
      flag = false;
    }
    if (!Values.password) {
      setLocalErrorMessage((prevState) => ({ ...prevState, password: true }));
      flag = false;
    }
    if (!Values.phone) {
      setLocalErrorMessage((prevState) => ({ ...prevState, phone: true }));
      flag = false;
    }
    if (!Values.role) {
      setLocalErrorMessage((prevState) => ({ ...prevState, role: true }));
      flag = false;
    }
    if (!Values.state) {
      setLocalErrorMessage((prevState) => ({ ...prevState, state: true }));
      flag = false;
    }
    if (!Values.zip_code) {
      setLocalErrorMessage((prevState) => ({ ...prevState, zip_code: true }));
      flag = false;
    }
    if (!Values.password) {
      setLocalErrorMessage((prevState) => ({ ...prevState, password: true }));
      flag = false;
    }
    if (!ConfirmPassword) {
      setLocalErrorMessage((prevState) => ({ ...prevState, ConfirmPassword: true }));
      flag = false;
    }
    if (ConfirmPassword !== Values.password) {
      setPasswordErrorMessage(true)
    }
    // Reset the error messages when the form is valid and submitted
    if (flag) {
      dispatch(handlerRegister(Values))
    }
  };
  useEffect(() => {
    dispatch(handlerGetDepartment())
    return () => { }
  }, [])

  useEffect(() => {
    if (Register) {
      toast.success(
        "Successfully Register"
      )
      navigate("/auth/sign-in")
    }
    dispatch(updatedRegister())
    return () => { }
  }, [Register])
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* <div className="absolute inset-0 z-0 h-full w-full bg-black/50" /> */}
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[44rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <form className="row g-3" onSubmit={onSubmit}>
              <div className="col-md-6 SelectSingleDropdownInModal">
                <label className="form-label">Department</label>
                <SingleSelect
                  options={(getListDepartment || []).map((item) => ({
                    value: item,
                    label: item?.title
                  }))}
                  handlerSelectedOption={(options) => {
                    Values.department = options.value?.id
                    setValues({ ...Values })
                    resetValidation()
                  }}
                  defaultSelected={Values.department}
                  borderedRed={localErrorMessage.department}
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
                  placeholder="Address"
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
                  placeholder="Address"
                  type="text"
                  name="state"
                  aria-autocomplete="list"
                  autoCorrect="off"
                  min="0"
                />
                {localErrorMessage.state && <Alert variant="danger">This field is required</Alert>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  value={Values.phone}
                  onChange={handleChange}
                  className={`form-control ${localErrorMessage.phone ? 'inputFieldRedColor' : ''}`}
                  placeholder="Address"
                  type="text"
                  name="phone"
                  aria-autocomplete="list"
                  autoCorrect="off"
                  min="0"
                />
                {localErrorMessage.phone && <Alert variant="danger">This field is required</Alert>}
              </div>
              <div className="col-md-6">
                <label className="form-label">Zip Code</label>
                <input
                  value={Values.zip_code}
                  onChange={handleChange}
                  className={`form-control ${localErrorMessage.zip_code ? 'inputFieldRedColor' : ''}`}
                  placeholder="Address"
                  type="number"
                  name="zip_code"
                  aria-autocomplete="list"
                  autoCorrect="off"
                  min="0"
                />
                {localErrorMessage.zip_code && <Alert variant="danger">This field is required</Alert>}
              </div>
              <div className="col-md-6 SelectSingleDropdownInModal">
                <label className="form-label">Role</label>
                <SingleSelect
                  options={[
                    { value: 'Staff', label: 'Staff' },
                    { value: 'Admin', label: 'Admin ' },
                  ]}
                  handlerSelectedOption={(options) => {
                    Values.role = options.value
                    setValues({ ...Values })
                    resetValidation()
                  }}
                  defaultSelected={Values.category}
                  borderedRed={localErrorMessage.category}
                />
                {localErrorMessage.role && <Alert variant="danger">This field is required</Alert>}
              </div>
              <div className="col-md-6 position-relative">
                <label className="form-label">Password</label>
                <input
                  value={Values.password}
                  onChange={handleChange}
                  className={`form-control ${localErrorMessage.password ? 'inputFieldRedColor' : ''}`}
                  placeholder="XXXXXXXXXXXXXXXXXXXXXXX"
                  type={PasswordVisible1 ? "password" : "text"}
                  name="password"
                  aria-autocomplete="list"
                  autoCorrect="off"
                  min="0"
                />
                {PasswordVisible1 ? <img src="/assets/icons/EyeView.svg"
                  alt="DropDownIcon"
                  className='DropDownIconsInputField c_pointer'
                  onClick={() => {
                    setPasswordVisible1(!PasswordVisible1)
                  }}
                /> :
                  <img src="/assets/icons/EyeViewNot.svg"
                    alt="DropDownIcon"
                    className='DropDownIconsInputField DatePickerDropDown c_pointer EyeIconsInAddressInSignUp'
                    onClick={() => {
                      setPasswordVisible1(!PasswordVisible1)
                    }}
                  />}
                {localErrorMessage.password && <Alert variant="danger">This field is required</Alert>}
              </div>
              <div className="col-md-6 position-relative">
                <label className="form-label">Confirm Password</label>
                <input
                  value={ConfirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                  }}
                  className={`form-control ${localErrorMessage.ConfirmPassword ? 'inputFieldRedColor' : ''}`}
                  placeholder="XXXXXXXXXXXXXXXXXXXXXXX"
                  type={PasswordVisible2 ? "password" : "text"}
                  name="ConfirmPassword"
                  aria-autocomplete="list"
                  autoCorrect="off"
                  min="0"
                />
                {PasswordVisible2 ? <img src="/assets/icons/EyeView.svg"
                  alt="DropDownIcon"
                  className='DropDownIconsInputField c_pointer'
                  onClick={() => {
                    setPasswordVisible2(!PasswordVisible2)
                  }}
                /> :
                  <img src="/assets/icons/EyeViewNot.svg"
                    alt="DropDownIcon"
                    className='DropDownIconsInputField DatePickerDropDown c_pointer EyeIconsInAddressInSignUp'
                    onClick={() => {
                      setPasswordVisible2(!PasswordVisible2)
                    }}
                  />}
                {localErrorMessage.ConfirmPassword && <Alert variant="danger">This field is required</Alert>}
              </div>
              {PasswordErrorMessage && <Alert variant="danger">Password Does not match</Alert>}
              <div className=" d-flex justify-content-end gap-2">
                {loading ? <div className='w-100 LoadingButton d-flex justify-content-center align-items-center'>
                  <ReactLoading type={"spokes"} color="white" className='' height={"35px"} width={"6%"} />
                </div> :
                  <Button type='submit' className='w-100'>
                    Register
                  </Button>
                }
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            <Typography variant="small" className=" flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
