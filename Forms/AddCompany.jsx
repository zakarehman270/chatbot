import React, { useState , useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { HandlerAddCompanyData } from '@/Redux/GeneralCrudOperation';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
const AddCompany = ({ data, handleClose }) => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(false)
    const [Values, setValues] = useState({
        name: data?.name,
        address: data?.address,
        phone: data?.phone,
        website: data?.phone,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        name: false,
        address: false,
        phone: false
    });
    function resetValidation() {
        setLocalErrorMessage({
            name: false,
            address: false,
            phone: false
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
        // Validate the form fields before submission
        if (!Values.address) {
            setLocalErrorMessage((prevState) => ({ ...prevState, address: true }));
            flag = false;
        }
        if (!Values.name) {
            setLocalErrorMessage((prevState) => ({ ...prevState, name: true }));
            flag = false;
        } if (!Values.phone) {
            setLocalErrorMessage((prevState) => ({ ...prevState, phone: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (flag) {
            if (data) {
                Values.id = data.id
                dispatch(handlerUpdate(Values))
            } else {
                setLoading(true)
                dispatch(HandlerAddCompanyData(Values))
            }
        }
    };

    useEffect(() => {
        if (Loading) {
            const timeoutId = setTimeout(() => {
                // After 2 seconds, set loading back to false
                setLoading(false);
                handleClose()
                toast.success("Successfully Added Company")
            }, 1500);
            return () => {
                clearTimeout(timeoutId);
            }; // 2000 milliseconds = 2 seconds
        }
        // Cleanup the timeout if the component unmounts before the 2 seconds
    }, [Loading]);

    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>

                <div className="col-md-6">
                    <label className="form-label">Company Name</label>
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
                    <label className="form-label">Company Address</label>
                    <input
                        value={Values.address}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.address ? 'inputFieldRedColor' : ''}`}
                        placeholder="Address"
                        type="text"
                        name="address"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.address && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Phone</label>
                    <input
                        value={Values.phone}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.phone ? 'inputFieldRedColor' : ''}`}
                        placeholder="Phone"
                        type="text"
                        name="phone"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.phone && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Company Website</label>
                    <input
                        value={Values.website}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.website ? 'inputFieldRedColor' : ''}`}
                        placeholder="Website"
                        type="text"
                        name="website"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.website && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Facebook Link</label>
                    <input
                        value={Values.website}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.website ? 'inputFieldRedColor' : ''}`}
                        placeholder="link"
                        type="text"
                        name="website"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.website && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">LinkIn Link</label>
                    <input
                        value={Values.website}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.website ? 'inputFieldRedColor' : ''}`}
                        placeholder="link"
                        type="text"
                        name="website"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.website && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Company Description</label>
                    <textarea
                        value={Values.Message}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.Message ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        Name="Message"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.Message && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className=" d-flex justify-content-end gap-2">
                    <Button type='button' className='buttonUnActive text-unset' onClick={() => {
                        handleClose()
                    }}>
                        Cancel
                    </Button>
                    {Loading ? <LoadingButton /> :
                        <Button type='submit'>
                            Save
                        </Button>
                    }
                </div>
            </form>
        </Container >
    );
};
export default AddCompany