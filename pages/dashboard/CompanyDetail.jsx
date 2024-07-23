import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Typography
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
const CompanyDetail = () => {
    const location = useLocation();
    let userId = location.search.replace("?", "")
    const [ProductDetails, setProductDetails] = useState()
    const { productTableData } = useSelector((state) => state.GeneralCrudOperation);
    useEffect(() => {
        window.scrollTo(0, 0)
        for (let i = 0; i < productTableData?.length; i++) {
            if (productTableData[i]?.id === userId) {
                setProductDetails(productTableData[i])
                break
            }
        }
    }, [])
    return (
        <div className='container-fluid mt-3'>
            <div className='row'>
                <div className='col-md-12'>
                    <div class="team-single">
                        <div class="row">
                            <div class="col-lg-4 col-md-5 ">
                                <div class="team-single-img">
                                    <img src="/assets/company.jpg" alt="" className='img-fluid companyImg' />
                                </div>
                                <div class="bg-light-gray padding-30px-all md-padding-25px-all sm-padding-20px-all text-center">
                                    <h2 class="margin-10px-bottom fs-4  fw-bold mb-3">Company Name</h2>
                                    <p class="sm-width-95 sm-margin-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div class="margin-20px-top team-single-icons">
                                        <ul class="no-margin mt-3">
                                            <li><a href="javascript:void(0)"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="javascript:void(0)"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="javascript:void(0)"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="javascript:void(0)"><i class="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 col-sm-12">
                                <div class="team-single-text padding-50px-left sm-no-padding-left">
                                    <h4 class="font-size38 sm-font-size32 xs-font-size30 mb-3">About us</h4>
                                    <p class="no-margin-bottom">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum voluptatem.</p>
                                    <div class="contact-info-section margin-40px-tb">
                                        <ul class="list-style9 no-margin mt-4 pb-3">
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">
                                                        <strong class="margin-10px-left ">Company address:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p>123 Main Street, NY 1000</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">
                                                        <strong class="margin-10px-left ">City:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p>New York</p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">

                                                        <strong class="margin-10px-left">State:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p>NY 10001</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">
                                                        <strong class="margin-10px-left ">Phone:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p>(+44) 123 456 789</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">
                                                        <strong class="margin-10px-left xs-margin-four-left ">Fax Numnber:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p>(+44) 123 456 789</p>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="row">
                                                    <div class="col-md-5  col-sm-12">
                                                        <strong class="margin-10px-left xs-margin-four-left ">Website:</strong>
                                                    </div>
                                                    <div class="col-md-7 col-sm-12">
                                                        <p><a href="javascript:void(0)">https://www.company.com</a></p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='d-flex gap-2 justify-content-between'>
                    <h1 className='MainHeading TextSize'>Company Employee's</h1>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-2">
                    <div className='UserBox tab-flex gap-3'>
                        <img src="/assets/img/users/1.jpg" alt="user" className='User' />
                        <div className=''>
                            <Typography variant="h6" color="blue-gray" className="mb-0">
                                ShadowPulse
                            </Typography>
                            <Typography variant="h7" color="blue-gray" className="mb-0">
                                Make smarter, fairer compensation decisions
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail