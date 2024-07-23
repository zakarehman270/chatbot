import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { Link, useLocation } from 'react-router-dom';
import CustomerTableData from '@/data/customer-table-data';
import Chat from './Chat';
import TableSortable from '@/components/TableSortable';
import { useSelector } from 'react-redux';
export function Profile() {
  const [UserDetails, setUserDetails] = useState(null)
  const location = useLocation();
  let userId = location.search.replace("?", "")
  const { PolicyDataAdmin } = useSelector((state) => state.GeneralCrudOperation);
  const Headers = [
    {
      Header: 'title',
      accessor: 'title',
    },
    {
      Header: 'Category',
      accessor: 'Category',
    },
    {
      Header: 'Product',
      accessor: 'Product',
    },
    {
      Header: 'Service',
      accessor: 'Service',
    },

    {
      Header: 'Action',
      accessor: 'action',
    },
  ]
  useEffect(() => {
    for (let i = 0; i < CustomerTableData?.length; i++) {
      if (CustomerTableData[i]?.Action === userId) {
        setUserDetails(CustomerTableData[i])
        break
      }
    }
  }, [])
  return (
    <div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-8">
        <CardBody className="p-4">
          <div className='row align-items-center'>
            <div className='col-md-3 col-sm-12'>
              <Avatar
                src={UserDetails?.img}
                alt="bruce-mars"
                size=""
                className="w-100 h-100 mt-4 rounded shadow"
              />
            </div>
            <div className='col-md-8 col-sm-12'>
              <ul class="list-style9 no-margin mt-4">
                <li>
                  <div class="row">
                    <div class="col-md-5 col-sm-12">
                      <strong class="margin-10px-left ">Name:</strong>
                    </div>
                    <div class="col-md-7  col-sm-12">
                      <p>Denzel Washington</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-md-5  col-sm-12">

                      <strong class="margin-10px-left ">Email:</strong>
                    </div>
                    <div class="col-md-7  col-sm-12">
                      <p>denzelwashington12@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-md-5  col-sm-12">
                      <strong class="margin-10px-left ">Phone:</strong>
                    </div>
                    <div class="col-md-7  col-sm-12">
                      <p>(+44) 123 456 789</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="row">
                    <div class="col-md-5  col-sm-12">

                      <strong class="margin-10px-left">Location:</strong>
                    </div>
                    <div class="col-md-7  col-sm-12">
                      <p>9601 Wilshire Blvd, 3rd Floor, Beverly Hills, California</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-0 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">

            </div>
          </div>

          <div className=''>

          </div>
        </CardBody>
      </Card>

      <Card className="mx-3 mt-3">
        <CardBody className="p-4">
          <h1 className='MainHeading TextSize'>Note</h1>
          <div className="reviews-members pt-4 pb-4">
            <div className="media">
              <div className="media-body">
                <div className="reviews-members-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-8">
        <CardBody className="p-0">
          <div className='outerWrapperChatInCustomerDetails'>
            <Chat MarginTopNone={true} />
          </div>
        </CardBody>
      </Card>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-8">
        <CardBody className="p-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-1">
              Products And Services
            </Typography>
          </div>
          <TableSortable
            data={PolicyDataAdmin}
            columns={Headers}
            LinkView={"policy-terms/view"}
            SearchData={'title'}
            DeleteName={"Policy Terms"}
          />
        </CardBody>
      </Card>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 mt-8">
        <CardBody className="p-4">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-1">
              Leads Logs
            </Typography>
          </div>
          <div>
            <div className="notification-items font-inter pb-2">
              <div className="border rounded-3 mt-2  overflow-hidden notification-item-container">
                <div className="notification-item bordered">
                  <Link to={`#`} >
                    <h6 className="notification-item-heading">
                      Title <span>a new product added</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Stage  <span>comes from lead management</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Event Type  <span>Follow Up</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Staff ID  <span>12212122</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Description <span>12212122</span>
                    </h6>
                  </Link>
                  <h6 className='notification-time'>2 hour ago</h6>
                </div>
              </div>
              <div className="border rounded-3 mt-2  overflow-hidden notification-item-container">
                <div className="notification-item bordered">
                  <Link to={`#}`} >
                    <h6 className="notification-item-heading">
                      Title <span>a new product added</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Stage  <span>comes from lead management</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Event Type  <span>Follow Up</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Staff ID  <span>12212122</span>
                    </h6>
                    <h6 className="notification-item-heading mt-1">
                      Description <span>12212122</span>
                    </h6>
                  </Link>
                  <h6 className='notification-time'>2 hour ago</h6>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Profile;
