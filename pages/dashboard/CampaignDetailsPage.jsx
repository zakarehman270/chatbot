import React,{useEffect} from 'react'
import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { handlerGetSingleCampaigns } from '@/Redux/Campaign';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
const CampaignDetailsPage = () => {
    const dispatch = useDispatch();
    const { loading, getSingleCampaign } = useSelector((state) => state.Campaign);
     const location = useLocation();
    let userId = location.search.replace("?", "")
    useEffect(() => {
        dispatch(handlerGetSingleCampaigns(userId))
      return () => {
      }
    }, [])
    return (
        <div className='container-fluid'>
            <Card className='mt-3'>
                <CardBody className=" px-4 pt-0 pb-3 pt-3">
                    <h1 className='MainHeading TextSize mb-3'>Campaign Details</h1>
                    <div className=''>
                        <ul class="list-style9 no-margin mt-4">
                            <li>
                                <div class="row">
                                    <div class="col-md-5 col-sm-12">
                                        <strong class="margin-10px-left ">Campaign Title:</strong>
                                    </div>
                                    <div class="col-md-7  col-sm-12">
                                        <p>{getSingleCampaign && getSingleCampaign?.title}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-md-5  col-sm-12">

                                        <strong class="margin-10px-left ">Category:</strong>
                                    </div>
                                    <div class="col-md-7  col-sm-12">
                                        <p>{getSingleCampaign && getSingleCampaign?.category_title}</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-md-5  col-sm-12">
                                        <strong class="margin-10px-left ">Start date:</strong>
                                    </div>
                                    <div class="col-md-7  col-sm-12">
                                        <p>{moment(getSingleCampaign && getSingleCampaign?.start_date).format("YYYY-MM-DD") }</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="row">
                                    <div class="col-md-5  col-sm-12">

                                        <strong class="margin-10px-left">End date:</strong>
                                    </div>
                                    <div class="col-md-7  col-sm-12">
                                        <p>{moment(getSingleCampaign && getSingleCampaign?.end_date).format("YYYY-MM-DD") }</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>

            <Card className=" mt-3">
                <CardBody className="p-4">
                    <h1 className='MainHeading TextSize'>Outcomes</h1>
                    <div className="reviews-members pt-4 pb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-body">
                                    <p>{getSingleCampaign && getSingleCampaign?.outcomes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            <Card className="mt-3">
                <CardBody className="p-4">
                    <h1 className='MainHeading TextSize'>Description</h1>
                    <div className="reviews-members pt-4 pb-4">
                        <div className="media">
                            <div className="media-body">
                                <div className="reviews-members-body">
                                    <p>{getSingleCampaign && getSingleCampaign?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}
export default CampaignDetailsPage