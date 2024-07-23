import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Button,
  Card,
  CardBody,
  Typography
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetSingleTicket } from '@/Redux/TicketManagement';
export function TicketDetail() {
  const location = useLocation();
  let userId = location.search.replace("?", "")
  const { getSingleTicket } = useSelector((state) => state.TicketManagement);
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(handlerGetSingleTicket(userId))
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <Card className="mx-3 mt-3">
              <CardBody className="p-4">
                <h1 className='MainHeading TextSize mb-3'>Ticket Details</h1>
                <div className=''>
                  <ul class="list-style9 no-margin mt-4">
                    <li>
                      <div class="row">
                        <div class="col-md-5 col-sm-12">
                          <strong class="margin-10px-left ">Title:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>{getSingleTicket && getSingleTicket?.ticket?.title}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">

                          <strong class="margin-10px-left ">Name:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>{getSingleTicket && getSingleTicket?.ticket?.name}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">
                          <strong class="margin-10px-left ">Email:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>{getSingleTicket && getSingleTicket?.ticket?.email}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">

                          <strong class="margin-10px-left">Phone:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>{getSingleTicket && getSingleTicket?.ticket?.phone}</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">
                          <strong class="margin-10px-left ">Customer:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>Existing Customer</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">
                          <strong class="margin-10px-left xs-margin-four-left ">Department:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p>Policy Claims</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div class="row">
                        <div class="col-md-5  col-sm-12">
                          <strong class="margin-10px-left xs-margin-four-left ">Status:</strong>
                        </div>
                        <div class="col-md-7  col-sm-12">
                          <p className='Label YesBadge'>{getSingleTicket && getSingleTicket?.ticket?.status}</p>
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
                    <p>{getSingleTicket && getSingleTicket?.ticket?.ticket_details} </p>
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
                <h1 className='MainHeading TextSize'>Assigned Staff</h1>
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
        <Card className="mx-3 mt-3">
          <CardBody className="p-4">
            <div className="row">
              <div className='d-flex gap-2 justify-content-between'>
                <h1 className='MainHeading TextSize mb-3'>All Notes</h1>
              </div>

              <ul className='notelist'>
                <li>
                  <div className='notebg-gray'>
                    <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <small className='notetime'>12:00 AM</small>
                  </div>
                </li>
                <li>
                  <div className='notebg-gray'>
                    <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <small className='notetime'>12:00 AM</small>
                  </div>
                </li>
                <li>
                  <div className='notebg-gray'>
                    <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <small className='notetime'>12:00 AM</small>
                  </div>
                </li>
                <li>
                  <div className='notebg-gray'>
                    <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <small className='notetime'>12:00 AM</small>
                  </div>
                </li>

              </ul>
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Add Notes</label>
                  <textarea
                    className="form-control"
                    placeholder="Enter Notes here..."
                    type="text"
                    name="description"
                    aria-autocomplete="list"
                    autoCorrect="off"
                    rows={5}
                  />
                </div>
                <div className=" d-flex justify-content-end gap-2">
                  <Button type='submit'>
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default TicketDetail;
