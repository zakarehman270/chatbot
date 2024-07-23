import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import ClaimFormPhoto from "/assets/claimform.jpg"

const ClaimManagementDetail = () => {

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


    //Descrition 
    const description = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections"; // Your paragraph
    const charCount = description.length;

    const maxCharToShow = 380; // Set your threshold
    const shouldShowReadMore = charCount > maxCharToShow;

    const [showModal, setShowModal] = useState(false);

    const handleReadMoreClick = () => {
        setShowModal(true);
    };

    //Photos Lightbox
    const photos = [
        {
            src: ClaimFormPhoto,
            title: 'Denial Letter',
        },
        {
            src: ClaimFormPhoto,
            title: 'Photo',
        },
        {
            src: ClaimFormPhoto,
            title: 'Carrier Response',
        },
        {
            src: ClaimFormPhoto,
            title: 'Correspondence',
        },
        {
            src: ClaimFormPhoto,
            title: 'Claim Form',
        },
    ];

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Claims Detail</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Claim Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>Travel Insurance Claim</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Policy Number:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>POL345678</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Claim Number:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>CLM678901</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">Date Loss:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>2023-09-12</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Date Reporterd:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>2023-09-14</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Status:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='Label YesBadge text-end float-r'>Pending</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">RSVR:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>$8,000.00</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Paid RSVR:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>$0.00</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Date Paid RSVR:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>N/A</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Expiry RSVR:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>N/A</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Paid Exv:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>$0.00</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Date Paid Exp:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>N/A</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left xs-margin-four-left ">Total Incr Loss:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>$7,500.00</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>

                <div className='col-md-6'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Occurence</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Street:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>123 Main Street, NY 1000</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">City:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>New York</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Zip Code:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>34567</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4" style={{ position: "relative" }}>
                            <h1 className='MainHeading TextSize'>Description</h1>
                            <div className="reviews-members pt-4 pb-4">
                                <div className="media">
                                    <div className="media-body">
                                        <div className="reviews-members-body">
                                            <p>
                                                {shouldShowReadMore
                                                    ? `${description.slice(0, maxCharToShow)}...`
                                                    : description}
                                            </p>

                                            {shouldShowReadMore && (
                                                <Button className='btn btnreadmore' onClick={handleReadMoreClick}>
                                                    Read More
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Claimant Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Claimant:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>Denzel Washington</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Company:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>Peak Performance</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Contact Number:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>(555) 789-0123</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left">Email Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>peakperformance@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Injured / Property Damaged</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>John Doe</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>123 Main St, Cityville, State 12345</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Repeated By:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>Claimant's Spouse</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4" style={{ position: "relative" }}>
                            <h1 className='MainHeading TextSize'>Remark</h1>
                            <div className="reviews-members pt-4 pb-4">
                                <div className="media">
                                    <div className="media-body">
                                        <div className="reviews-members-body">
                                            <p>
                                                {shouldShowReadMore
                                                    ? `${description.slice(0, maxCharToShow)}...`
                                                    : description}
                                            </p>

                                            {shouldShowReadMore && (
                                                <Button className='btn btnreadmore' onClick={handleReadMoreClick}>
                                                    Read More
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className='col-md-12'>
                    <Card className="mx-3 mt-3">
                        <CardBody className="p-4">
                            <h1 className='MainHeading TextSize mb-3'>Claim Adjuster Details</h1>
                            <div className=''>
                                <ul class="list-style9 no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">Adjuster Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>Alice Johnson</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">

                                                <strong class="margin-10px-left ">Adjuster Number:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>BSM67890</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Adjuster Email:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p className='text-end'>alice.adjuster@email.com</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row">
                {photos.map((photo, index) => (
                    <div key={index} className="col-md-4">
                        <Card className="mx-3 mt-3">
                            <CardBody className="p-4">
                                <h1 className="MainHeading TextSize mb-3">{photo.title}</h1>
                                <img src={photo.src} alt={photo.title} className="claimformImg" />
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </div>
            <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>{description}</Modal.Body>
            </Modal>
        </div>
    )
}

export default ClaimManagementDetail