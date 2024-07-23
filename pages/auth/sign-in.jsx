import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { handlerLoginUser, updatedSuccessLogin } from "@/Redux/Auth";
import { ResetErrorMessage } from "@/Redux/ImageUpload";
import ReactLoading from 'react-loading';
import { toast } from "react-toastify";
export function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({});
  const { errorMessage, loading, SuccessLogin, Auth } = useSelector((state) => state.Auth);
  const [PasswordVisible1, setPasswordVisible1] = useState(true)
  const [ValidateEmail, setValidateEmail] = useState(false)
  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "password is required";
    }
    if (!formData.rememberMe) {
      newErrors.checked = "field is required";
    }
    // Add more validation rules as needed for the password field.
    setValidateEmail(false)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleFormSubmit = (e) => {
    
    setValidateEmail(false)
    dispatch(ResetErrorMessage())
    e.preventDefault();
    let EmailValidate = true
    if (validateForm()) {
      if (formData.email) {
        if (formData.email.match(isValidEmail)) {
          EmailValidate = true
        } else {
          EmailValidate = false
          setValidateEmail(true)
        }
      }
      
      if (EmailValidate) {
        dispatch(handlerLoginUser({
          "email": formData.email,
          "password": formData.password
        }))
      }
    }
  };
  useEffect(() => {
    dispatch(ResetErrorMessage())
    return () => { }
  }, [])
  useEffect(() => {
    if (SuccessLogin) {
      localStorage.setItem("tokenChatBoat", Auth?.access_token)
      localStorage.setItem("CurrentTime", new Date())
      toast.success("Successfully Login")
      navigate('/dashboard/home')
    }
    dispatch(updatedSuccessLogin())
    return () => { }
  }, [SuccessLogin])
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {/* <div className="absolute inset-0 z-0 h-full w-full bg-black/50" /> */}
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              type="email"
              label="Email"
              placeholder="Email"
              size="lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <div className="position-relative">
              <Input
                placeholder="XXXXXXXXXXXXXXXXXXXXXXX"
                type={PasswordVisible1 ? "password" : "text"}
                label="Password"
                size="lg"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              {PasswordVisible1 ? <img src="/assets/icons/EyeView.svg"
                alt="DropDownIcon"
                className='DropDownIconsInputField c_pointer PasswordInLogin'
                onClick={() => {
                  setPasswordVisible1(!PasswordVisible1)
                }}
              /> :
                <img src="/assets/icons/EyeViewNot.svg"
                  alt="DropDownIcon"
                  className='DropDownIconsInputField DatePickerDropDown PasswordInLogin c_pointer EyeIconsInAddressInSignUp'
                  onClick={() => {
                    setPasswordVisible1(!PasswordVisible1)
                  }}
                />}
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>


            <div className="-ml-2.5">
              <Checkbox
                label="Remember Me"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
              />
              {errors.checked && <p className="text-red-500">{errors.checked}</p>}
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            {errorMessage && <p className="text-red-500">{errorMessage?.error} </p>}
            {ValidateEmail && <p className="text-red-500"> Please Entry Valid Email  </p>}
            {loading ? <div className='w-100 LoadingButton d-flex justify-content-center align-items-center'>
              <ReactLoading type={"spokes"} color="white" className='' height={"35px"} width={"6%"} />
            </div> :
              <Button variant="gradient" fullWidth onClick={handleFormSubmit}>
                Sign In
              </Button>
            }
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>

              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
