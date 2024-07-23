import React from 'react';
import './Modal.css';
const LeftSideModal = ({ IsOpenUserModal, setIsOpenUserModal, data }) => {

    console.log("data", data)
    return (
        <div>
            {IsOpenUserModal && <div className="overlay" onClick={() => {
                setIsOpenUserModal(false)
            }} />}
            <div className={`popup-container w-75 ${IsOpenUserModal ? 'open' : ''}`}>
                <div className="popup-content  ">
                    {/* {UsersLoading &&
                        <div className={`loading`}>
                            <div className="loader w-100">
                                <ReactLoading type={"spokes"} color='white' height={"66%"} width={"15%"} />
                            </div>
                        </div>
                    } */}
                    <div className='right_side_modal_body Height' >
                        <img src="/assets/icons/close.svg" alt="close" className='CloseIon c_pointer' onClick={() => {
                            setIsOpenUserModal(false)
                        }} />
                        <div className='row mt-2'>
                            <div className='col-md-6'>
                                <ul class="list-style9 list-style-Staff no-margin mt-4">
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5 col-sm-12">
                                                <strong class="margin-10px-left ">First Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.firstName}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Last Name:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.lastName}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left ">Email:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.email}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">Phone:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.phone}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">Address:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.address}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">Role:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.role}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">City:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.city}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">State:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.state}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="row">
                                            <div class="col-md-5  col-sm-12">
                                                <strong class="margin-10px-left">Zip:</strong>
                                            </div>
                                            <div class="col-md-7  col-sm-12">
                                                <p>{data && data?.zip_code}</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <div className='p-4'>
                                    <div>
                                        <img src="/assets/img/Man.jpg" alt="man" className='userImStaff' />
                                        <p className='text-center Label mt-2'>{data && data?.firstName} {data && data?.lastName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 Label mt-4'>
                            Description
                        </div>
                        <div className='col-md-12'>
                            {data && data?.description}
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default LeftSideModal