import React, { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, } from "@/context";
import { Profile } from "@/pages/dashboard";
import ProductServiceView from "@/pages/dashboard/ProductServiceView";
import ServiceDetails from "@/pages/dashboard/ServiceDetails";
import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from 'react-redux';
import { logout } from '@/Redux/Auth';
import { toast } from 'react-toastify';
import TransactionDetailsPage from '@/pages/dashboard/TransactionDetailsPage';
import LeadsDetailsPage from '@/pages/dashboard/LeadsDetailsPage';
import CompanyDetailsPage from '@/pages/dashboard/CompanyDetailsPage';
import TicketList from '@/pages/dashboard/TicketList';
import TicketDetail from '@/pages/dashboard/TicketDetail';
import AddTicket from '@/pages/dashboard/AddTicket';
import KnowledgeBaseDetailsPage from '@/pages/dashboard/KnowledgeBaseDetailsPage';
import PolicyTermDetailPage from '@/pages/dashboard/PolicyTermDetailPage';
import AddProducts from '@/Forms/AddProducts';
import CampaignDetailsPage from '@/pages/dashboard/CampaignDetailsPage';
import CustomerSatisfactionDetail from '@/pages/dashboard/CustomerSatisfactionDetail';
import AddCertificate from '@/pages/dashboard/AddCertificate';
import AddClaims from '@/pages/dashboard/AddClaims';
import ClaimManagementDetail from '@/pages/dashboard/ClaimManagementDetail';
import CertificateManagementDetail from '@/pages/dashboard/CertificateManagementDetail';
import AddInsuranceSurvey from '@/pages/dashboard/AddInsuranceSurvey';
import InsuranceSurveyDetail from '@/pages/dashboard/InsuranceSurveyDetail';


export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [ShowSweetAlert, setShowSweetAlert] = useState(false)
  const navigate = useNavigate();
  const dispatchLogout = useDispatch()
  function handlerLogOut() {
    localStorage.removeItem("tokenChatBoat")
    dispatchLogout(logout()) 
    navigate('/auth/sign-in')
    toast.success("Successfully Log Out")
  }
  return (
    <div className="min-h-screen bg-blue-gray-50/50">

      <div className=''>
        <SweetAlert
          show={ShowSweetAlert}
          warning
          showCancel
          confirmBtnText="Yes, Log Out!"
          confirmBtnBsStyle="danger"
          title={`Are you sure you would like to Log Out`}
          onConfirm={() => {
            handlerLogOut()
          }}
          onCancel={() => {
            setShowSweetAlert(false)
          }}
          focusCancelBtn
        >
        </SweetAlert>
      </div>
      <Sidenav
        routes={routes}
        setShowSweetAlert={setShowSweetAlert}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
      />
      <div className={`p-4 xl:ml-80`}>
        <DashboardNavbar />
      
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
          <Route exact path={"/customers-listing-details/view"} element={<Profile />} />
          <Route exact path={"/product-service/view"} element={<ProductServiceView />} />
          <Route exact path={"/services/view"} element={<ServiceDetails />} />
          <Route exact path={"/transaction/view"} element={<TransactionDetailsPage />} />
          <Route exact path={"/leads/view"} element={<LeadsDetailsPage />} />
          <Route exact path={"/company/view"} element={<CompanyDetailsPage />} />
          <Route exact path={"/knowledge-base/view"} element={<KnowledgeBaseDetailsPage />} />
          <Route exact path={"/policy-terms/view"} element={<PolicyTermDetailPage />} />
          <Route exact path={"/ticket-management/list"} element={<TicketList />} />
          <Route exact path={"/ticket-management/view"} element={<TicketDetail />} />
          <Route exact path={"/ticket-management/add-ticket"} element={<AddTicket />} />
          <Route exact path={"/add-product"} element={<AddProducts />} />
          <Route exact path={"/campaign-management/view"} element={<CampaignDetailsPage />} />
          <Route exact path={"/customer-satisfaction-detail/view"} element={<CustomerSatisfactionDetail />} />
          <Route exact path={"/add-Certificate"} element={<AddCertificate />} />
          <Route exact path={"/add-claims"} element={<AddClaims />} />
          <Route exact path={"/add-insurance-survey"} element={<AddInsuranceSurvey />} />
          <Route exact path={"/claim-management/view"} element={<ClaimManagementDetail />} />
          <Route exact path={"/certificate-management/view"} element={<CertificateManagementDetail />} />
          <Route exact path={"/insurance-survey/view"} element={<InsuranceSurveyDetail />} />
        </Routes>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
