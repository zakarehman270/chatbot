import React,{useState} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { StatisticsCard } from "@/widgets/cards";
import {
  statisticsCardsData,
} from "@/data";
import BarChart from "@/common/BarChart";
import LineChart from "@/common/LineChart";
import { useSelector } from "react-redux";
import TableSortable from "@/components/TableSortable";
export function Home() {
  const { LeadsData } = useSelector((state) => state.GeneralCrudOperation);
  const [ShowModal, setShowModal] = useState(false)
  function handleClose(params) {
      setShowModal(false)
  }
  const Headers = [
      {
          Header: 'Name',
          accessor: 'Name',
      },
      {
          Header: 'Email',
          accessor: 'Email',
      },
      {
          Header: 'Company',
          accessor: 'Company',
      },
      {
          Header: 'Phone',
          accessor: 'Phone',
      },
      {
          Header: 'Status',
          accessor: 'Status',
      },
      {
          Header: 'Send Message',
          accessor: 'Send Message',
      },
      {
          Header: 'Add Note',
          accessor: 'Add Note',
      },
      {
          Header: 'Action',
          accessor: 'action',
      },
  ]
  return (
    <div className="mt-12">
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
      <div className="container-fluid bg-white mb-4">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 d-flex justify-content-end">
              <Button className="">Issue certificate of insurance</Button>
              <Button className="ms-2">Claim Report</Button>
              <Button className="ms-2">Document Requests</Button>
              <Button className="ms-2">Create Quotation</Button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mb-4 MainHeading">Conversation Report</h1>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-0">
        <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-3"
          >
            <div className="bg-lightgrey m-0 flex items-center justify-between p-3 w-100">
              <div className="convertionarte">
                <h3>1,235 <span className="blueconversion">60%</span> </h3>
                <p>Conversion Rate</p>
              </div>
              <div className="convertionarte">
                <div className="d-flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 starcolor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <h3> <span className="blueconversion ms-1">4.5/5 Star </span> </h3>
                </div>
                <p>Customer Satisfaction</p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 pt-0 pb-2" id="barchart">
            <LineChart />
          </CardBody>
        </Card>
        {/* <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-4"
          >
            <h2>Arrange Conversation by time of the day</h2>
            <h3>NOV 23-DEC 18</h3>
          </CardHeader>
          <CardBody className="pt-0 p-0">
            <BarChart />
          </CardBody>
        </Card> */}
      </div>
      <h1 className="mb-4 MainHeading">Recent Leads</h1>
      <div className="mb-4 grid grid-cols-1 xl:grid-cols-1">
        <Card className="">
          <CardBody className=" p-4">
            <TableSortable
              data={LeadsData}
              columns={Headers}
              LinkView={"leads/view"}
              SearchData={'Name'}
              DeleteName={"Leads"}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Home;
