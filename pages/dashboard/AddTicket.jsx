import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import SingleSelect from '@/common/customSingleSelect';
import {
    Button, Input, Card, Typography,
    CardBody,
} from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { HandlerAddProducts } from '@/Redux/GeneralCrudOperation';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import MyEditor from '@/components/RichTextEditor';
import CustomMultiSelect from '@/components/customMultiSelect';
import { Link, useNavigate } from 'react-router-dom';
import { ResetAddTicket, handlerAddTicket } from '@/Redux/TicketManagement';
import { handlerGetListStaff } from '@/Redux/Staff';
import { handlerGetListCustomer } from '@/Redux/Customer';
import { handlerGetDepartment } from '@/Redux/Departments';

const AddTicket = ({ }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, AddTicketList } = useSelector((state) => state.TicketManagement);
    const { getListStaff } = useSelector((state) => state.Staff);
    const { getListCustomer } = useSelector((state) => state.Customer);
    const { getListDepartment } = useSelector((state) => state.Departments);
    const [Values, setValues] = useState({
        title: "",
        ticket_details: "",
        email: "",
        phone: "",
        name: "",
        existing_customer_id: "",
        status: "",
        private_notes: "",
        department: "",
        assigned_staff: [],
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
        ticket_details: false,
        email: false,
        phone: false,
        name: false,
        existing_customer_id: false,
        status: false,
        private_notes: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            ticket_details: false,
            email: false,
            phone: false,
            name: false,
            existing_customer_id: false,
            status: false,
            private_notes: false,
        });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        resetValidation();
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        let flag = true;
        if (!Values.ticket_details) {
            setLocalErrorMessage((prevState) => ({ ...prevState, ticket_details: true }));
            flag = false;
        }
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        } if (!Values.email) {
            setLocalErrorMessage((prevState) => ({ ...prevState, email: true }));
            flag = false;
        } if (!Values.phone) {
            setLocalErrorMessage((prevState) => ({ ...prevState, phone: true }));
            flag = false;
        } if (!Values.private_notes) {
            setLocalErrorMessage((prevState) => ({ ...prevState, private_notes: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            dispatch(handlerAddTicket(Values))
        }
    };

    useEffect(() => {
        if (AddTicketList) {
            toast.success("Successfully Added Successfully")
            navigate("/dashboard/ticket-management")
        }
        dispatch(ResetAddTicket())
        return () => {
        }
    }, [AddTicketList])

    useEffect(() => {
        dispatch(handlerGetListStaff())
        dispatch(handlerGetListCustomer())
        dispatch(handlerGetDepartment())
        return () => { }
    }, [])

    return (
        <Card className="mt-3">
            <CardBody className="">
                <Container fluid className='p-0'>
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                        Add Ticket ..
                    </Typography>
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="col-md-6">
                            <label className="form-label">Ticket Title</label>
                            <input
                                value={Values.title}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.title ? 'inputFieldRedColor' : ''}`}
                                placeholder="Title"
                                type="text"
                                name="title"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.title && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Name</label>
                            <input
                                value={Values.name}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.name ? 'inputFieldRedColor' : ''}`}
                                placeholder="Name"
                                type="text"
                                name="name"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.name && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                value={Values.email}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.email ? 'inputFieldRedColor' : ''}`}
                                placeholder="Email"
                                type="email"
                                name="email"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.email && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Phone</label>
                            <input
                                value={Values.phone}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.phone ? 'inputFieldRedColor' : ''}`}
                                placeholder="Phone"
                                type="number"
                                name="phone"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                            />
                            {localErrorMessage.phone && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6 SelectSingleDropdownInModal">
                            <label className="form-label"> Customer</label>
                            <SingleSelect
                                options={(getListCustomer || []).map((item) => ({
                                    value: item,
                                    label: item?.firstname + " " + item?.firstname
                                }))}
                                handlerSelectedOption={(options) => {
                                    Values.existing_customer_id = options?.value?.id
                                    setValues({ ...Values })
                                    resetValidation()
                                }}
                                defaultSelected={
                                    getListCustomer?.filter(item => item.id === Values.existing_customer_id)
                                        .map(item => ({ label: item.title, value: item.id }))
                                }
                                borderedRed={localErrorMessage.existing_customer_id}
                            />
                            {localErrorMessage.existing_customer_id && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className="col-md-6 SelectSingleDropdownInModal">
                            <label className="form-label"> Department</label>
                            <SingleSelect
                                options={(getListDepartment || []).map((item) => ({
                                    value: item,
                                    label: item?.title
                                }))}
                                handlerSelectedOption={(options) => {
                                    Values.department = options?.value?.id
                                    setValues({ ...Values })
                                    resetValidation()
                                }}
                                defaultSelected={
                                    getListDepartment?.filter(item => item.id === Values.department)
                                        .map(item => ({ label: item.title, value: item.id }))
                                }
                                borderedRed={localErrorMessage.department}
                            />
                            {localErrorMessage.department && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-6 SelectSingleDropdownInModal">
                            <label className="form-label"> Assigned Staff</label>
                            <CustomMultiSelect ImageSource={"/assets/icons/DropDownIcon.svg"}
                                options={(getListStaff || []).map((item) => ({
                                    value: item,
                                    label: item?.address
                                }))}
                                handlerSelectedOption={(options) => {
                                    Values.assigned_staff = options.map(item => item?.value.id);
                                    setValues({ ...Values })
                                }}
                            />
                            {localErrorMessage?.assigned_staff && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className="col-md-6 SelectSingleDropdownInModal">
                            <label className="form-label"> Status</label>
                            <SingleSelect
                                options={[
                                    { value: 'Pending', label: 'Pending' },
                                    { value: 'Closed ', label: 'Closed ' },
                                    { value: 'Resolved ', label: 'Resolved ' },
                                    { value: 'In Progress ', label: 'In Progress ' },
                                    { value: 'Open ', label: 'Open ' },
                                ]}
                                handlerSelectedOption={(options) => {
                                    Values.status = options.value
                                    setValues({ ...Values })
                                    resetValidation()
                                }}
                                defaultSelected={Values.status}
                                borderedRed={localErrorMessage.status}
                            />
                            {localErrorMessage.status && <Alert variant="danger">This field is required</Alert>}
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Description</label>
                            <MyEditor setValue={(value) => {
                                Values.ticket_details = value
                                setValues({ ...Values })
                                resetValidation()
                            }} />
                            {localErrorMessage.ticket_details && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className="col-md-12">
                            <label className="form-label">Private Note</label>
                            <textarea
                                value={Values.private_notes}
                                onChange={handleChange}
                                className={`form-control ${localErrorMessage.private_notes ? 'inputFieldRedColor' : ''}`}
                                placeholder="Phone"
                                type="number"
                                name="private_notes"
                                aria-autocomplete="list"
                                autoCorrect="off"
                                min="0"
                                rows={2}
                            />
                            {localErrorMessage.private_notes && <Alert variant="danger">This field is required</Alert>}
                        </div>

                        <div className=" d-flex justify-content-end gap-2">
                            <Link to="/dashboard/ticket-management">
                                <Button type='button' className='buttonUnActive text-unset' onClick={() => {
                                }}>
                                    Cancel
                                </Button>
                            </Link>
                            {loading ? <LoadingButton /> :
                                <Button type='submit'>
                                    Save
                                </Button>
                            }
                        </div>
                    </form>
                </Container >
            </CardBody>
        </Card>
    );
};
export default AddTicket