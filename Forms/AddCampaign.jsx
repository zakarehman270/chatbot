import React, { useState, useEffect } from 'react';
import LoadingButton from '@/common/LoadingButton';
import { Button } from '@material-tailwind/react';
import { Container, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import SingleSelect from '@/common/customSingleSelect';
import { ResetAddCampaignList, handlerAddCampaigns, handlerGetListCampaign, } from '@/Redux/Campaign';
import { handlerGetCategories } from '@/Redux/Category';
import moment from 'moment';
import { ResetSuccessfullyUpdatedData, handlerUpdateAnyData } from '@/Redux/UpdateAnyData';
const AddCampaign = ({ data, handleClose , UpdateURL }) => {
    const dispatch = useDispatch();
    const { loading, AddCampaignList } = useSelector((state) => state.Campaign);
    const { getListCategories } = useSelector((state) => state.Category);
    const { SuccessfullyUpdatedData } = useSelector((state) => state.UpdateAnyData);
    
    const [Values, setValues] = useState({
        title: data?.title,
        start_date: moment(data?.start_date).format("YYYY-MM-DD"),
        end_date: moment(data?.end_date).format("YYYY-MM-DD"),
        outcomes: data?.outcomes,
        description: data?.description,
        category: data?.category,
    });
    const [localErrorMessage, setLocalErrorMessage] = useState({
        title: false,
        start_date: false,
        end_date: false,
        outcomes: false,
        category: false,
    });
    function resetValidation() {
        setLocalErrorMessage({
            title: false,
            start_date: false,
            end_date: false,
            outcomes: false,
            category: false,
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
        if (!Values.title) {
            setLocalErrorMessage((prevState) => ({ ...prevState, title: true }));
            flag = false;
        }
        if (!Values.start_date) {
            setLocalErrorMessage((prevState) => ({ ...prevState, start_date: true }));
            flag = false;
        } if (!Values.end_date) {
            setLocalErrorMessage((prevState) => ({ ...prevState, end_date: true }));
            flag = false;
        } if (!Values.category) {
            setLocalErrorMessage((prevState) => ({ ...prevState, category: true }));
            flag = false;
        } if (!Values.outcomes) {
            setLocalErrorMessage((prevState) => ({ ...prevState, outcomes: true }));
            flag = false;
        }
        // Reset the error messages when the form is valid and submitted
        if (Values.start_date && Values.end_date) {
            Values.start_date = new Date(Values.start_date)
            Values.end_date = new Date(Values.end_date)
        }
        if (flag) {
            if (data) {
                dispatch(handlerUpdateAnyData({
                    data: Values,
                    id: data.id,
                    url:UpdateURL,
                }))
            } else {
                dispatch(handlerAddCampaigns(Values))
            }
        }
    };
    useEffect(() => {
        if (SuccessfullyUpdatedData) {
            toast.success("Successfully Updated campaign")
            dispatch(handlerGetListCampaign())
            handleClose()
        }
        dispatch(ResetSuccessfullyUpdatedData())
        return () => { }
    }, [SuccessfullyUpdatedData])


    useEffect(() => {
        if (AddCampaignList) {
            toast.success("Successfully Added campaign")
            dispatch(handlerGetListCampaign())
            handleClose()
        }
        dispatch(ResetAddCampaignList())
        return () => {
        }
    }, [AddCampaignList])

    useEffect(() => {
        dispatch(handlerGetCategories())
        return () => {
        }
    }, [])
    return (
        <Container fluid className='p-0'>
            <form className="row g-3" onSubmit={onSubmit}>
                <div className="col-md-6">
                    <label className="form-label">Campaign Title</label>
                    <input
                        value={Values.title}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.title ? 'inputFieldRedColor' : ''}`}
                        placeholder="First Name"
                        type="text"
                        name="title"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.title && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Start Date</label>
                    <input
                        value={Values.start_date}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.start_date ? 'inputFieldRedColor' : ''}`}
                        placeholder="Last Name"
                        type="date"
                        name="start_date"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.start_date && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">End Date</label>
                    <input
                        value={Values.end_date}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.end_date ? 'inputFieldRedColor' : ''}`}
                        placeholder="End Date"
                        type="date"
                        name="end_date"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.end_date && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-6">
                    <label className="form-label">Outcomes</label>
                    <input
                        value={Values.outcomes}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.outcomes ? 'inputFieldRedColor' : ''}`}
                        placeholder="Outcomes"
                        type="text"
                        name="outcomes"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        min="0"
                    />
                    {localErrorMessage.outcomes && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12 SelectSingleDropdownInModal">
                    <label className="form-label">Category</label>
                    <SingleSelect
                        options={(getListCategories || []).map((item) => ({
                            value: item,
                            label: item?.title
                        }))}
                        handlerSelectedOption={(options) => {
                            Values.category = options?.value?.id
                            setValues({ ...Values })
                            resetValidation()
                        }}
                        defaultSelected={
                            getListCategories?.filter(item => item.id === Values.category)
                                .map(item => ({ label: item.title, value: item.id }))
                        }
                        borderedRed={localErrorMessage.role}
                    />
                    {localErrorMessage.category && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className="col-md-12">
                    <label className="form-label">Description</label>
                    <textarea
                        value={Values.description}
                        onChange={handleChange}
                        className={`form-control ${localErrorMessage.description ? 'inputFieldRedColor' : ''}`}
                        placeholder="Description"
                        type="text"
                        Name="description"
                        aria-autocomplete="list"
                        autoCorrect="off"
                        rows={5}
                    />
                    {localErrorMessage.description && <Alert variant="danger">This field is required</Alert>}
                </div>
                <div className=" d-flex justify-content-end gap-2">
                    <Button type='button' className='buttonUnActive text-unset' onClick={() => {
                        handleClose()
                    }}>
                        Cancel
                    </Button>
                    {loading ? <LoadingButton /> :
                        <Button type='submit'>
                            Save
                        </Button>
                    }
                </div>
            </form>
        </Container >
    );
};
export default AddCampaign