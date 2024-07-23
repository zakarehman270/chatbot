import React from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CompanyDetailsPage = () => {
    return (
        <div className='mt-3' id='companyDetail'>
            <Card>
                <CardBody className=" px-4 pt-0 pb-2">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Typography variant="h6" color="blue-gray" className="mb-2">
                            Company Details
                        </Typography>
                    </div>
                    <div className='d-flex gap-4'>
                        <Card>
                            <CardBody className=" px-4 pt-2 pb-2">
                                <div>
                                    <img src="/assets/Company/CompanyLogo.png" alt="companyLogo" className='CompanyLogo' />
                                    <div className='d-flex gap-2 align-items-center justify-content-center mt-4'>
                                        <img src="/assets/Company/facebook.png" alt="facebook" className='CompanyLogoIcons c_pointer' />
                                        <img src="/assets/Company/linkedin.png" alt="facebook" className='CompanyLogoIcons c_pointer' />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className=" px-4 pt-2 pb-2">
                                <div className='row g-1' >
                                    <div className='col-md-2 Label'>
                                        <p>Company Name</p>
                                    </div>
                                    <div className='col-md-10'>
                                        <p>ABC Solutions Inc.</p>
                                    </div>
                                    <div className='col-md-2 Label'>
                                        <p>Address</p>
                                    </div>
                                    <div className='col-md-9'>
                                        <p>123 Main Street, Suite 456, Cityville, State, ZIP</p>
                                    </div>
                                    <div className='col-md-2 Label'>
                                        <p>Phone</p>
                                    </div>
                                    <div className='col-md-9'>
                                        <p> (555) 123-4567</p>
                                    </div>
                                    <div className='col-md-2 Label'>
                                        <p>Website</p>
                                    </div>
                                    <div className='col-md-9'>
                                        <a href='https://www.linkin.com/' target="_blank" rel="noopener noreferrer">
                                            <p className='LinkColor'>https://www.abcsolutions.com/</p>
                                        </a>
                                    </div>
                                    <div className='col-md-2 Label'>
                                        <p>Facebook</p>
                                    </div>
                                    <div className='col-md-9'>
                                        <a href='https://www.linkin.com/' target="_blank" rel="noopener noreferrer">
                                            <p className='LinkColor'>https://www.facebook.com/</p>
                                        </a>
                                    </div>
                                    <div className='col-md-2 Label'>
                                        <p>LinkIn</p>
                                    </div>
                                    <div className='col-md-9'>
                                        <a href='https://www.linkin.com/' target="_blank" rel="noopener noreferrer">
                                            <p className='LinkColor'>https://www.linkin.com/</p>
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <Card className='mt-3 mb-3'>
                        <CardBody className=" px-4 pt-2 pb-2">
                            <div className='col-md-12'>
                                <p>ABC Solutions Inc. is a leading technology solutions provider, specializing in cutting-edge software development and IT consulting services. With a team of experienced professionals, we strive to deliver innovative solutions that empower businesses to thrive in the digital era. Our commitment to quality and client satisfaction sets us apart in the industry.</p>
                            </div>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}
export default CompanyDetailsPage