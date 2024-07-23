import React, { useState } from 'react'
import SingleSelect from '@/common/customSingleSelect'
import { Button, Card, Typography } from '@material-tailwind/react'
import { AnalyticTableData, statisticsCardsData } from '@/data'
import { StatisticsCard } from '@/widgets/cards'
import TableSortable from '@/components/TableSortable'

const AnaLyticChatbot = () => {
    const [Status, setStatus] = useState("")
    const Headers = [
        {
            Header: 'Names',
            accessor: 'Names',
        },
        {
            Header: 'Types',
            accessor: 'Types',
        },
        {
            Header: 'Messages',
            accessor: 'Messages',
        },
        {
            Header: 'Sessions',
            accessor: 'Sessions',
        },
        {
            Header: 'Last Updates',
            accessor: 'Last Updates',
        },
        {
            Header: 'Status',
            accessor: 'Status',
        },
        {
            Header: 'Action',
            accessor: 'Action',
        },
    ]

    return (
        <div className='mt-12'>
            <h1 className='mb-4 MainHeading'>
                Analytic ChatBot
            </h1>

            <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5">
                {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
                    <StatisticsCard
                        key={title}
                        {...rest}
                        title={title}
                        icon={React.createElement(icon, {
                            className: "w-4 h-4 text-white",
                        })}
                    />
                ))}
            </div>

            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-1">
                {/* <Card className="overflow-hidden xl:col-span-2 p-5">
                    <div className='mob-flex justify-content-between'>
                        <div className='d-flex gap-2'>
                            <div className='d-flex gap-2 '>
                                <div className='margin-bb'>
                                    <h1 className='HeadingH1'>Looking for an enterprise bot</h1>
                                    <h2 className='mt-2 subHeadingH1'>Custom everything connect your own APIs etc,</h2>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex gap-3'>
                            <Button className="buttonUnActive text-unset">
                                Demo
                            </Button>
                            <Button className="button">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </Card> */}
                <h1 className='MainHeading'> Live Analytics </h1>
                <Card className="overflow-hidden xl:col-span-2 p-5">
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-md-3 col-sm-12 marginbb-10 px-0 mx-0'>
                            <div className='outerWrapperInputSearch col-3 w-100'>
                                <input type="text" placeholder='Search' className='Search ' />
                                <img src="/assets/icons/search.svg" alt="search" />
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-12 marginbb-10 '>
                            <SingleSelect
                                options={[
                                    { value: 'In Progress', label: 'In Progress' },
                                    { value: 'Finalized', label: 'Finalized' },
                                    { value: 'For Sale', label: 'For Sale' },
                                    { value: 'Stopped', label: 'Stopped' },
                                ]}
                                handlerSelectedOption={(options) => {
                                    setValues(options.value)
                                }}
                                defaultSelected={Status}
                                borderedRed={""}
                            />
                        </div>
                        <div className='col-md-3 col-sm-12 marginbb-10 '>
                            <SingleSelect
                                options={[
                                    { value: 'In Progress', label: 'In Progress' },
                                    { value: 'Finalized', label: 'Finalized' },
                                    { value: 'For Sale', label: 'For Sale' },
                                    { value: 'Stopped', label: 'Stopped' },
                                ]}
                                handlerSelectedOption={(options) => {
                                    setValues(options.value)
                                }}
                                defaultSelected={Status}
                                borderedRed={""}
                            />
                        </div>
                        <div className='col-md-3 col-sm-12 marginbb-10 px-0 mx-0'>
                            <Button className='w-100'>
                                New Chat Session
                            </Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 px-0 mt-3'>
                            <TableSortable
                                data={AnalyticTableData}
                                columns={Headers}
                                LinkView={""}
                                SearchData={'title'}
                                DeleteName={"service"}
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AnaLyticChatbot