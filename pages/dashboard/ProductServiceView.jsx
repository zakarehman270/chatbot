import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
const ProductServiceView = () => {
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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Product Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Title:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>General Liability Insurance</p>
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
                                                <strong class="margin-10px-left ">Coverage Options:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Artisan Contractors</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">Policy Features:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Artisan Contractors</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">State:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Alabama</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">State Specific:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='Label NoBadge'>No</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Available to Specific Users:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='Label YesBadge'>Yes</p>
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
                    <h1 className='MainHeading TextSize'>Description</h1>
                    <div className="reviews-members pt-4 pb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-body">
                                    <p>General liability insurance doesn't cover employee injuries, auto accidents, punitive damages (in most states), workmanship, intentional acts or professional</p>
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
                            <h1 className='MainHeading TextSize'>Package Details</h1>

                        </div>

                        <div className="col-md-4 mt-2">
                            <div className='PricingBox'>
                                <div className='row'>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Price:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            $12.00
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Package Name:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Compensation Planning
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Details:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Make smarter, fairer compensation decisions by ...
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className='PricingBox'>
                                <div className='row'>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Price:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            $12.00
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Package Name:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Compensation Planning
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Details:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Make smarter, fairer compensation decisions by ...
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-2">
                            <div className='PricingBox'>
                                <div className='row'>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Price:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            $12.00
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Package Name:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Compensation Planning
                                        </Typography>
                                    </div>
                                    <div className='col-md-5 col-sm-12'>
                                        <Typography variant="h6" color="blue-gray" className="mb-2">
                                            Details:
                                        </Typography>
                                    </div>
                                    <div className='col-md-7 col-sm-12'>
                                        <Typography variant="h7" color="blue-gray" className="mb-2">
                                            Make smarter, fairer compensation decisions by ...
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
                            <h1 className='MainHeading TextSize'>Users</h1>
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
                </CardBody>
            </Card>
        </div>
    )
}

export default ProductServiceView