import React,{useEffect} from 'react'
import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
const LeadsDetailsPage = () => {
    const { AllData } = useSelector((state) => state.GetListAnyData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handlerGetAnyData("lead"))
        return () => { }
    }, [])
    console.log("AllData",AllData?.lead)
    return (
        <div>
            <div className='row mt-3'>
                <div className='col-md-6'>
                    <Card className='py-3 margin-bb'>
                        <CardBody className=" px-4 pt-2 pb-2">
                            <h1 className='MainHeading TextSize mb-3'>Leads Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Title:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.firstname} {AllData?.lead && AllData?.lead[0]?.lastname}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Source:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.lead_source}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Stage:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.stage}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">Email:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.email}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Phone:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.phone}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">First Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.firstname}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left "> Last Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.lasttname}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left "> Other Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.othername}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card className='py-3'>
                        <CardBody className=" px-4 pt-0 pb-2 pt-2">
                            <h1 className='MainHeading TextSize mb-3'>Company Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Company:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.company}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.address}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">City:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.city}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">State:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.state}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Phone:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.phone}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Status</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='NoBadge'>{AllData?.lead && AllData?.lead[0]?.status}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left "> Contractor's License No.</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{AllData?.lead && AllData?.lead[0]?.contact_license_no}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row mb-3">
                                            <div class="col-md-5  col-sm-12">
                                                {/* <strong class="margin-10px-left xs-margin-four-left "> Contractor's License No.</strong> */}
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                {/* <p>XXX21122112</p> */}
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='mt-3'>
                <Card>
                    <CardBody className=" px-4 pt-0 pb-2">
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <h1 className='MainHeading TextSize mb-3'>Leads Logs</h1>
                        </div>
                        <div>
                            <div className="notification-items font-inter pb-2">
                                <div className="border rounded-3 mt-2  overflow-hidden notification-item-container">
                                    <div className="notification-item bordered">
                                        <Link to={`/details/s}`} >
                                            <h6 className="notification-item-heading">
                                                Title <span>a new product added</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Stage  <span>comes from lead management</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Event Type  <span>Follow Up</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Staff ID  <span>12212122</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Description <span>12212122</span>
                                            </h6>
                                        </Link>
                                        <h6 className='notification-time'>2 hour ago</h6>
                                    </div>
                                </div>
                                <div className="border rounded-3 mt-2  overflow-hidden notification-item-container">
                                    <div className="notification-item bordered">
                                        <Link to={`/details/s}`} >
                                            <h6 className="notification-item-heading">
                                                Title <span>a new product added</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Stage  <span>comes from lead management</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Event Type  <span>Follow Up</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Staff ID  <span>12212122</span>
                                            </h6>
                                            <h6 className="notification-item-heading mt-1">
                                                Description <span>12212122</span>
                                            </h6>
                                        </Link>
                                        <h6 className='notification-time'>2 hour ago</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className='mt-3'>
                <Card>
                    <CardBody className=" px-4 py-3">
                        <div className="row">
                            <div className='d-flex gap-2 justify-content-between'>
                                <h1 className='MainHeading TextSize mb-3'>Leads Notes</h1>
                            </div>

                            <ul className='notelist'>
                                <li>
                                    <div className='notebg-gray'>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <small className='notetime'>12:00 AM</small>
                                    </div>
                                </li>
                                <li>
                                    <div className='notebg-gray'>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <small className='notetime'>12:00 AM</small>
                                    </div>
                                </li>
                                <li>
                                    <div className='notebg-gray'>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <small className='notetime'>12:00 AM</small>
                                    </div>
                                </li>
                                <li>
                                    <div className='notebg-gray'>
                                        <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        <small className='notetime'>12:00 AM</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>

    )
}

export default LeadsDetailsPage