import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
    Typography
} from "@material-tailwind/react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnySingleDataByID } from '@/Redux/GetAnySingleDataByID';
const CustomerSatisfactionDetail = () => {
    const location = useLocation();
    const { GetSingleDataById } = useSelector((state) => state.GetAnySingleDataByID);
    let userId = location.search.replace("?", "")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(handlerGetAnySingleDataByID({
            id:userId,
            url:"customer-satisfaction"
        }))
      return () => {
      }
    }, [])
     console.log("GetSingleDataById",GetSingleDataById)
    return (
        <div className="container-fluid">
            <div className='row mt-3'>
                <div className="col-md-12">
                    <div className="offer-dedicated-body-left">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade active show" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab">
                                <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                                    <div className="row">
                                        <div className='d-flex gap-2 justify-content-between'>
                                            <h1 className='MainHeading TextSize'>About Customer</h1>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className='PricingBox'>
                                                <div className='row'>
                                                    <div className='col-md-4'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            Full Name:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            {GetSingleDataById && GetSingleDataById[0]?.customer_name}
                                                        </Typography>
                                                    </div>

                                                    <div className='col-md-4'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            Email Address:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                                        {GetSingleDataById && GetSingleDataById[0]?.customer_email}
                                                        </Typography>
                                                    </div>

                                                    <div className='col-md-4'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            Phone Number:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                                        {GetSingleDataById && GetSingleDataById[0]?.customer_phone}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-2">
                                            <div className='PricingBox'>
                                                <div className='row'>
                                                    <div className='col-md-5'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            User ID:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-7'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            #{GetSingleDataById && GetSingleDataById[0]?.id}
                                                        </Typography>
                                                    </div>

                                                    <div className='col-md-5'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            Reference Session ID:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-7'>
                                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                                            #3515
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                                            Channel Name:
                                                        </Typography>
                                                    </div>
                                                    <div className='col-md-7'>
                                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                                        {GetSingleDataById && GetSingleDataById[0]?.channel_name}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                                    <div className="graph-star-rating-header">
                                        <div className="star-rating d-flex align-items-center">
                                            <a href="#"><FaStar className='customsize' style={{ color: "#0f6ca5" }} /></a>
                                            <a href="#"><FaStar className='customsize' style={{ color: "#0f6ca5" }} /></a>
                                            <a href="#"><FaStar className='customsize' style={{ color: "#0f6ca5" }} /></a>
                                            <a href="#"><FaStar className='customsize' style={{ color: "#0f6ca5" }} /></a>
                                            <a href="#"><CiStar className='customsize' style={{ color: "#0f6ca5" }} /></a> <b className="text-black ml-2">4.2 out of 5</b>
                                        </div>
                                    </div>
                                    <div className="graph-star-rating-body mt-4">
                                        <div className="rating-list">
                                            <div className="rating-list-left text-black">
                                                5 Star
                                            </div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div style={{ width: "56%", backgroundColor: "#0f6ca5" }} aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="">
                                                        <span className="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rating-list-right text-black">56%</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left text-black">
                                                4 Star
                                            </div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div style={{ width: "23%", backgroundColor: "#0f6ca5" }} aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="">
                                                        <span className="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rating-list-right text-black">23%</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left text-black">
                                                3 Star
                                            </div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div style={{ width: "11%", backgroundColor: "#0f6ca5" }} aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="">
                                                        <span className="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rating-list-right text-black">11%</div>
                                        </div>
                                        <div className="rating-list">
                                            <div className="rating-list-left text-black">
                                                2 Star
                                            </div>
                                            <div className="rating-list-center">
                                                <div className="progress">
                                                    <div style={{ width: "2%", backgroundColor: "#0f6ca5" }} aria-valuemax="5" aria-valuemin="0" aria-valuenow="5" role="progressbar" className="">
                                                        <span className="sr-only">80% Complete (danger)</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rating-list-right text-black">02%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                                    <h1 className='MainHeading TextSize'>Comment</h1>
                                    <div className="reviews-members pt-4 pb-4">
                                        <div className="media">
                                            <div className="media-body">
                                                <div className="reviews-members-body">
                                                    <p> {GetSingleDataById && GetSingleDataById[0]?.customer_comments}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerSatisfactionDetail