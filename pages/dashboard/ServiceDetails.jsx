import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetSingleService } from '@/Redux/Service';


const ServiceDetails = () => {
    const location = useLocation();
    let userId = location.search.replace("?", "")
    const [ProductDetails, setProductDetails] = useState()
    const { productTableData } = useSelector((state) => state.GeneralCrudOperation);
    const { loading, getSingleService } = useSelector((state) => state.Service);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(handlerGetSingleService(userId))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">

                            <h1 className='MainHeading TextSize mb-3'>Service Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Title:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{getSingleService && getSingleService?.title}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Category:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Artisan Contractors</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Related Product:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>General Liability Insurance</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>


                        </CardBody>
                    </Card>
                </div>

            </div>
            <Card className="mx-3 mt-3">
                <CardBody className="p-4">
                    <div className="row">
                        <div className='d-flex gap-2 justify-content-between'>
                            <h1 className='MainHeading TextSize'>About Service</h1>
                        </div>

                        <div className="col-md-12 mt-2">
                            <div className='PricingBox'>
                                <div className='row'>
                                    <div className='col-md-2 col-md-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Price:
                                        </Typography>
                                    </div>
                                    <div className='col-md-10 col-md-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            $12.00
                                        </Typography>
                                    </div>

                                    <div className='col-md-2 col-md-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Details:
                                        </Typography>
                                    </div>
                                    <div className='col-md-10 col-md-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            {getSingleService && getSingleService?.description}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="mx-3 mt-3">
                <CardBody className="p-4">
                    <div className="row">
                        <div className='d-flex gap-2 justify-content-between'>
                            <h1 className='MainHeading TextSize'> Assigned Staff</h1>

                        </div>

                        <div className="col-md-6 mt-2">
                            <div className='UserBox mob-flex gap-3'>
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

                        <div className="col-md-6 mt-2">
                            <div className='UserBox mob-flex gap-3'>
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
                </CardBody>
            </Card>
        </div>
    )
}

export default ServiceDetails