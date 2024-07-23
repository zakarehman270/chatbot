import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';

const CertificateManagementDetail = () => {
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
                            <h1 className='MainHeading TextSize mb-3'>Certificate Management</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Company Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Peak Performance</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>321 Cedar Road</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Phone:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>(555) 789-0123</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">City:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>Summit City</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">State:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>CO</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Zip:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>34567</p>
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
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CertificateManagementDetail