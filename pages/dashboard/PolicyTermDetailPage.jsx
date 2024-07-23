import React from 'react'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
const PolicyTermDetailPage = () => {
    return (
        <div className='mt-3'>
            <Card>
                <CardBody className=" px-4 pt-0 pb-2">
                    <div className='d-flex justify-content-between align-items-center mt-4'>
                        <Typography variant="h4" color="blue-gray" className="mb-2">
                            Policy Term
                        </Typography>
                    </div>
                    <div className='mob-flex gap-4'>
                        <Card className='mobmarginbottom'>
                            <CardBody className="px-4 pt-3 pb-3">
                                <div>
                                    <img src="/assets/Company/CompanyLogo.png" alt="companyLogo" className='CompanyLogo mb-4' />
                                    <Typography variant="h5" color="blue-gray" className="mb-0 text-center">
                                        Policy Name
                                    </Typography>
                                    <p className='text-center'> 2023-01-01</p>
                                </div>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="px-4 pt-3 pb-3">
                                <div className='row g-1' >
                                    <div className='col-md-4 Label'>
                                        <p>Policy ID</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>ABC123</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Policy Type</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>Auto Insurance</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Coverage Start Date</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p> 2023-01-01</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Coverage End Date</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>2023-12-31</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Premium Amount</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>$1200.00</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Deductible Amount</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>$500.00</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Policyholder Name</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>John Doe</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Policyholder Contact</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>555-1234</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Beneficiary</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>Jane Doe</p>
                                    </div>
                                    <div className='col-md-4 Label'>
                                        <p>Renewal Date</p>
                                    </div>
                                    <div className='col-md-8'>
                                        <p>2024-01-01</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <Card className='mt-3 mb-3'>
                        <CardBody className=" px-4 pt-2 pb-2">
                            <div className='col-md-12 mb-3'>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Explaination
                                </Typography>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className='col-md-12 mb-3'>
                                <Typography variant="h6" color="blue-gray" className="mb-2">
                                    Description
                                </Typography>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
        </div>
    )
}

export default PolicyTermDetailPage