import React, { useState , useEffect} from 'react';
import {
    Button,
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import TableSortable from '@/components/TableSortable';
import GeneralModal from '@/common/GeneralModal';
import AddCampaign from '@/Forms/AddCampaign';
import CampaignData from '@/data/Campaign';
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetListCampaign } from '@/Redux/Campaign';
export function CampaignManagements() {
    const [ShowModal, setShowModal] = useState(false)
    const { getListCampaign, loading } = useSelector((state) => state.Campaign);
    const [Data, setData] = useState('')
    const dispatch = useDispatch()
    function handleClose() {
        setShowModal(false)
    }
    const Headers = [
        {
            Header: 'Campaign Title',
            accessor: 'title',
        },
        {
            Header: 'Category',
            accessor: 'category_title',
        },
        {
            Header: 'Start Date',
            accessor: 'start_date',
        },
        {
            Header: 'End Date',
            accessor: 'end_date',
        },
        {
            Header: 'Outcomes',
            accessor: 'outcomes',
        },
        {
            Header: 'Action',
            accessor: 'id',
        },
    ]


    useEffect(() => {
        dispatch(handlerGetListCampaign())
        return () => {
        }
    }, [])
    return (
        <Card className='mt-3'>
            <GeneralModal size={"lg"} show={ShowModal} handleClose={handleClose}
                ModalContent={<AddCampaign handleClose={handleClose} data={Data} UpdateURL={"campaigns"} />}
                ModalHeader={"Add Campaign"} />
            <CardBody className=" px-4 pt-0 pb-2">
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Campaign List
                    </Typography>
                    <Button onClick={() => {
                        setShowModal(true)
                        setData("")
                    }}>
                        Add Campaign
                    </Button>
                </div>
                <TableSortable
                    data={getListCampaign ? getListCampaign : [] }
                    columns={Headers}
                    UpdateTableDate={true}
                    LinkView={"campaign-management/view"}
                    SearchData={'title'}
                    DeleteName={"Campaign"}
                    deleteURL={"campaigns"}
                    setData={setData}
                    setShowModal={setShowModal}
                />
            </CardBody>
        </Card>
    );
}
export default CampaignManagements