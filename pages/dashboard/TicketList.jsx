import React, { useState , useEffect } from 'react';
import TicketManagementList from "@/data/TicketManagementList";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import TableSortable from '@/components/TableSortable';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetListTicket } from '@/Redux/TicketManagement';
export function TicketList() {
    const { getListTicket , loading } = useSelector((state) => state.TicketManagement);
    const dispatch = useDispatch()
    const Headers = [ 
        // {
        //     Header: 'Id',
        //     accessor: 'ids',
        // },
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Customer Name',
            accessor: 'name',
        },
        {
            Header: 'Customer email',
            accessor: 'email',
        },
        {
            Header: 'assigned staff',
            accessor: 'assigned_staff',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]
    useEffect(() => {
      dispatch(handlerGetListTicket())
      return () => {}
    }, [])
    return (
        <Card className='mt-3'>
            
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Ticket List
                    </Typography>
                    <Link to="/dashboard/ticket-management/add-ticket" className='middle none font-sans font-bold center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
                            Add Ticket
                    </Link>

                </div>
                <TableSortable
                    data={getListTicket?getListTicket:[]}
                    columns={Headers}
                    LinkView={"ticket-management/view"}
                    SearchData={'name'}
                    DeleteName={"Ticket"}
                    deleteURL={"tickets"}
                />
            </CardBody>
        </Card>
    );
}

export default TicketList;
