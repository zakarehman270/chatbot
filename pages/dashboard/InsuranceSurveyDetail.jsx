import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Button,
    Card,
    CardBody,
    Typography
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import TableSortable from '@/components/TableSortable';
import { ContractorInsuranceSurveyData } from '@/Redux/ContractorInsuranceSurvey';

const InsuranceSurveyDetail = () => {
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

    //Table
    const Headers = [
        {
            Header: 'Question',
            accessor: 'question',
        },
        {
            Header: 'Answer',
            accessor: 'answer',
        },
    ]


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Insurance Survey</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Full Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>James Noah</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

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
                                                <strong class="margin-10px-left ">Email:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>james@example.com</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">Phone:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>(+44) 123 456 789</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>123 Main Street, NY 1000</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">City:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>New York</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">State:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>NY 10001</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Product:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p> Worker's Compensation Insurance</p>
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
                    <h1 className='MainHeading TextSize mb-4'>Contractor Insurance Survey</h1>
                    <TableSortable
                        data={ContractorInsuranceSurveyData}
                        columns={Headers}
                        LinkView={"insurance-survey/view"}
                        SearchData={'Name'}
                        DeleteName={"Claims"}
                    />
                </CardBody>
            </Card>

        </div>
    )
}

export default InsuranceSurveyDetail