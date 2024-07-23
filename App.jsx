import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AuthPage, Dashboard } from "@/layouts";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SignIn, SignUp } from "./pages/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
function App() {
  const { Auth } = useSelector((state) => state.Auth);
  useEffect(() => {
    if (!Auth) {
      <Navigate to="/auth/sign-in" />;
    }
  }, [Auth]);
  const myFunction = () => {
  };

  useEffect(() => {
    // Set a timeout for 60 minutes (60 minutes * 60 seconds * 1000 milliseconds)
    const timeoutId = setTimeout(myFunction, 60 * 60 * 1000);

    // Clean up the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []);



  // useEffect(() => {
  //   // Set current time
  //   setCurrentTime(new Date());
  //   // Check if currentTime is equal to endTime
  //   const isTimeEqual = currentTime.getTime() === endTime.getTime();
  //   if (isTimeEqual) {
  //     // Do something when the times are equal
  //   }
  //   // Calculate end time (1 hour after current time)
  //   const oneHourLater = new Date(currentTime.getTime() + 60 * 60 * 1000);
  //   setEndTime(oneHourLater);
  // },);
  const navigate = useNavigate();
  let CurrentTime = localStorage.getItem("CurrentTime")
  // CurrentTime = JSON.parse(CurrentTime)
  const currentTime = new Date(CurrentTime);
  const newTime = new Date(currentTime.getTime() + 60 * 60 * 1000);
  if (new Date() === newTime) {
    localStorage.removeItem("tokenChatBoat")
    dispatchLogout(logout())
    navigate('/auth/sign-in')
    toast.success("Successfully Log Out")
  }
  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route
          element={
            <PrivateRoute
              auth={Auth}
            />
          }
        >
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Route>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>

    </div>
  );
}

export default App;
