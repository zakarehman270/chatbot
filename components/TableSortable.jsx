import React, { useState, useEffect } from 'react'
import {
    Button,
    Card,
    CardBody, Typography,
} from "@material-tailwind/react";
import { useTable, useSortBy, useFlexLayout, useFilters } from 'react-table';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SweetAlert from "react-bootstrap-sweetalert";
import Pagination from './Pagination';
import {
    StarIcon,
} from "@heroicons/react/24/solid";
import { RxCross1 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { ResetDeleteSuccess, handlerDeleteAnyData } from '@/Redux/DeleteAnyData';
import ReactLoading from 'react-loading';
import { handlerGetCategories } from '@/Redux/Category';
import { handlerGetListService } from '@/Redux/Service';
import moment from 'moment';
import { handlerGetAnyData } from '@/Redux/GetListAnyData';

const TableSortable = ({ data, columns, deleteURL, LinkView, SearchData, leftSideModal, setIsOpenUserModal, DeleteName, setData, UpdateTableDate, setShowModal }) => {
    /// Pagination start ///
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(10)
    const nPages = Math.ceil(10 / recordsPerPage)
    /// Pagination end ///
    const { DeleteSuccess, loading } = useSelector((state) => state.DeleteAnyData);
    const dispatch = useDispatch()
    const [Hovered, setHovered] = useState(false)
    const [SelectedIndex, setSelectedIndex] = useState()
    const [SelectedID, setSelectedID] = useState(null)
    const [ShowSweetAlert, setShowSweetAlert] = useState(false)
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: {
                sortBy: [{ id: 'title', desc: false }],
            },
        },
        useFilters, // Place useFilters before useSortBy
        useSortBy,
        useFlexLayout
    );
    function handlerDeleteData() {
        setShowSweetAlert(false)
        dispatch(handlerDeleteAnyData({
            DeleteURL: deleteURL,
            id: SelectedID
        }))
    }
    useEffect(() => {
        if (DeleteSuccess) {
            toast.success(`Successfully delete ${DeleteName}`)
            if (DeleteName === "Category") {
                dispatch(handlerGetCategories())
            }
            if (DeleteName === "Service") {
                dispatch(handlerGetListService())
            }
            if (DeleteName === "Product/Service Terms") {
                dispatch(handlerGetAnyData("policy-terms"))
            } if (DeleteName === "Customer Satisfaction") {
                dispatch(handlerGetAnyData("customer-satisfaction"))
            }
            if (DeleteName === "Transaction") {
                dispatch(handlerGetAnyData("transaction"))
            }
            if (DeleteName === "Staff") {
                dispatch(handlerGetAnyData("staff"))
            }
            if (DeleteName === "Leads") {
                dispatch(handlerGetAnyData("lead"))
            }
            if (DeleteName === "Tag") {
                dispatch(handlerGetAnyData("tag"))
            }
            if (DeleteName === "Departments") {
                dispatch(handlerGetAnyData("departments"))
            }
        }
        dispatch(ResetDeleteSuccess())
        return () => { }
    }, [DeleteSuccess])


    return (
        <div className='position-relative'>
            {loading &&
                <div className='outerWrapperBackHover d-flex justify-content-center align-items-center'>
                    <ReactLoading type={"spokes"} color="white" height={"10%"} width={"10%"} />
                </div>
            }
            <SweetAlert
                show={ShowSweetAlert}
                warning
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title={`Are you sure you would like to delete this ${DeleteName}?`}
                onConfirm={() => {
                    handlerDeleteData()
                }}
                onCancel={() => {
                    setShowSweetAlert(false)
                }}
                focusCancelBtn
            >

            </SweetAlert>
            <input
                type="text"
                placeholder="Search..."
                className='SearchInput'
                onChange={(e) => setFilter(SearchData, e.target.value)}
            />
            <div className="mb-4 grid grid-cols-1 xl:grid-cols-1 mt-3">
                <Card className=" xl:col-span-2">
                    <CardBody className="px-0 pt-0 pb-0">
                        <div className='tableWidth'>
                            <table  {...getTableProps()} className="w-100 responsive">
                                <thead>
                                    {headerGroups.map((headerGroup, index) => (
                                        <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                                            {headerGroup.headers.map((column) => (
                                                <th
                                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                                    className="border-b border-blue-gray-50 py-3 px-6 text-left"
                                                >
                                                    <Typography
                                                        variant="small"
                                                        className="text-[11px] font-medium uppercase "
                                                    >
                                                        {column.render('Header')}
                                                        <span>
                                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                                        </span>
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()}>
                                    {rows.map((row, index) => {
                                        prepareRow(row);
                                        return (
                                            <tr
                                                key={index}
                                                {...row.getRowProps()}
                                                className={`${SelectedIndex === index ? 'ActiveRowInTable' : ''
                                                    } ${Hovered === index ? 'hoverTableRow' : ''}`}
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    if (leftSideModal) {
                                                        setIsOpenUserModal(true)
                                                        setData(row.original)
                                                    }
                                                }}
                                            >
                                                {row.cells.map((cell, key) => {
                                                    if (cell?.column?.Header === "Start Date" || cell?.column?.Header === "End Date") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div className='d-flex'>
                                                                    <p>{moment(cell?.value).format("YYYY-MM-DD")}</p>
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Status") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div className='d-flex'>
                                                                    <p className={`Status ${cell?.value === "Pending" ? "NoBadge" : "YesBadge"}`}> {cell?.value}</p>
                                                                </div>
                                                            </td>
                                                        )
                                                    }

                                                    if (cell?.column?.Header === "Answer") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <p> {cell?.value === "Yes" ? <FaCheck className='greenIcon' /> : <RxCross1 className='redIcon' />}</p>
                                                            </td>
                                                        )
                                                    }

                                                    if (cell?.column?.Header === "Question") {
                                                        return (
                                                            <td {...cell.getCellProps()} style={{ width: "95%" }}>
                                                                <p> {cell?.value}</p>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Add Note") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div>
                                                                    <div className='d-flex'>
                                                                        <Button className='sendMessageButton py-2'>
                                                                            Add Note
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Send Message") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div className='d-flex'>
                                                                    <Button className='sendMessageButton py-2'>
                                                                        Send Message
                                                                    </Button>
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Rating") {
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div className='d-flex'>
                                                                    <StarIcon className='ratingStar' />
                                                                    {cell?.value}
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Description") {
                                                        return (
                                                            <td {...cell.getCellProps()} >
                                                                <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{cell?.value}</p>
                                                            </td>
                                                        )
                                                    } if (cell?.column?.Header === "Messages") {
                                                        return (
                                                            <td {...cell.getCellProps()} >
                                                                <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>{cell?.value}</p>
                                                            </td>
                                                        )
                                                    }
                                                    if (cell?.column?.Header === "Action") {
                                                        return (
                                                            <td {...cell.getCellProps()} className="">
                                                                <div className='d-flex gap-1'>
                                                                    {LinkView && <Link to={`/dashboard/${LinkView}?${cell?.value}`} >
                                                                        <img src="/assets/icons/eye.svg" alt="write" className='IconInTable' />
                                                                    </Link>
                                                                    }
                                                                    {UpdateTableDate &&
                                                                        <img src="/assets/icons/write.svg" alt="write" className='IconInTable' onClick={() => {
                                                                            setData(cell?.row?.original)
                                                                            setShowModal(true)
                                                                        }} />
                                                                    }
                                                                    <img src="/assets/icons/trash.svg" alt="write"
                                                                        className='IconInTable'
                                                                        onClick={() => {
                                                                            setSelectedID(cell?.value)
                                                                            setShowSweetAlert(true)
                                                                        }}
                                                                        onMouseEnter={() => {
                                                                            setHovered(index)
                                                                        }}
                                                                        onMouseLeave={() => {
                                                                            setHovered("")
                                                                        }}
                                                                    />
                                                                </div>
                                                            </td>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <td {...cell.getCellProps()} className="CellWidth">
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="font-semibold"
                                                                >
                                                                    {cell.render('Cell')}
                                                                </Typography>
                                                            </td>
                                                        )
                                                    }
                                                }
                                                )}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </CardBody>
                </Card>
                <div className='d-flex justify-content-end mt-3'>
                    <Pagination
                        nPages={nPages ? nPages : 0}
                        currentPage={currentPage}
                        setCurrentPage={() => {
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default TableSortable