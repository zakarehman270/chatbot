import React, { useEffect, useState } from 'react';
import AddCustomerForm from "@/Forms/AddCustomerForm";
import GeneralModal from "@/common/GeneralModal";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Button } from '@material-tailwind/react';
import TableSortable from '@/components/TableSortable';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';
export function CustomerListing() {
  const [Data, setData] = useState()
  const { AllData } = useSelector((state) => state.GetListAnyData);
  const [ShowModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  function handleClose() {
    setShowModal(false)
  }
  const Headers = [
    {
      Header: 'First Names',
      accessor: 'firstname',
    },
    {
      Header: 'Last Name',
      accessor: 'lastname',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone',
      accessor: 'phone',
    },
    {
      Header: 'Company',
      accessor: 'company_name',
    },
    {
      Header: 'Location',
      accessor: 'address',
    },
    {
      Header: 'Last Engaged',
      accessor: 'lastUpdate',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },

    {
      Header: 'Action',
      accessor: 'Action',
    },
  ]
  useEffect(() => {
    dispatch(handlerGetAnyData("customer"))
  }, [])
  return (
    <Card className='mt-3'>
      <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
        ModalContent={<AddCustomerForm handleClose={handleClose} data={Data} />}
        ModalHeader={Data ? "Edit Customer" : "Add Customer"} />
      <CardBody className=" px-4 pt-0 pb-2">
        <div className='d-flex justify-content-between align-items-center mt-4'>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Customer
          </Typography>
          <Button onClick={() => {
            setShowModal(true)
            setData("")
          }}>
            Add Customer
          </Button>
        </div>
        <TableSortable
          data={AllData?.customer ? AllData?.customer : []}
          columns={Headers}
          LinkView={"customers-listing-details/view"}
          SearchData={'firstname'}
          DeleteName={"Customer"}
          deleteURL={"campaigns"}
          setData={setData}
          UpdateTableDate={true}
          setShowModal={setShowModal}
        />
      </CardBody>
    </Card>
  );
}

export default CustomerListing;
