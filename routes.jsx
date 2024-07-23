import {
  HomeIcon,
  UserCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  TicketIcon,
  StarIcon,
  BanknotesIcon,
  UserGroupIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { Home, CustomerListing } from "@/pages/dashboard";
import Chat from "./pages/dashboard/Chat";
import AnaLyticChatbot from "./pages/dashboard/AnaLyticChatbot";
import ProductsAndServices from "./pages/dashboard/ProductsAndServices";
import FAQ from "./pages/dashboard/FAQ";
import Services from "./pages/dashboard/Services";
import Transaction from "./pages/dashboard/Transaction";
import Staff from "./pages/dashboard/Staff";
import LeadsPage from "./pages/dashboard/LeadsPage";
import Settings from "./pages/dashboard/Settings";
import TicketList from "./pages/dashboard/TicketList";
import CampaignManagements from "./pages/dashboard/CampaignManagements";
import CustomerSatisfaction from "./pages/dashboard/CustomerSatisfaction";
import { FaCertificate, FaProductHunt } from "react-icons/fa";
import { MdHomeRepairService, MdOutlineManageHistory } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { IoIosChatbubbles } from "react-icons/io";
import CertificateManagement from "./pages/dashboard/CertificateManagement";
import ClaimManagement from "./pages/dashboard/ClaimManagement";
import InsuranceSurvey from "./pages/dashboard/InsuranceSurvey";
const icon = {
  className: "w-5 h-5 text-inherit",
};
export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TicketIcon {...icon} />,
        name: "Ticket Management",
        path: "/ticket-management",
        element: <TicketList />,
      },
      {

        icon: <MdOutlineManageHistory {...icon} />,
        name: "Campaign Management",
        path: "/campaign-management",
        element: <CampaignManagements />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        icon: <FaProductHunt {...icon} />,
        name: "Products",
        path: "/product",
        element: <ProductsAndServices />,
      },
      {
        icon: <MdHomeRepairService {...icon} />,
        name: "Services",
        path: "/services",
        element: <Services />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Customers",
        path: "/customers-listing-details",
        element: <CustomerListing />,
      },
      {
        icon: <ChatBubbleBottomCenterTextIcon {...icon} />,
        name: "Knowledge base",
        path: "/knowledge-base",
        element: <FAQ />,
      }, 
      { 
        icon: <FaCertificate {...icon} />, 
        name: "Certificate Management",  
        path: "/certificate-management", 
        element: <CertificateManagement />, 
      },
      {
        icon: <ClipboardDocumentCheckIcon {...icon} />,
        name: "Claim Management",
        path: "/claim-management",
        element: <ClaimManagement />,
      },
      {
        icon: <ClipboardDocumentCheckIcon {...icon} />,
        name: "Insurance Survey",
        path: "/insurance-survey",
        element: <InsuranceSurvey />,
      },
      {
        icon: <StarIcon {...icon} />,
        name: "Customer Satisfaction",
        path: "/customer-satisfaction",
        element: <CustomerSatisfaction />,
      },
      {
        icon: <TbMessageChatbot {...icon} />,
        name: "Analytic ChatBot",
        path: "/analytic-chatbot",
        element: <AnaLyticChatbot />,
      },
      {
        icon: <IoIosChatbubbles {...icon} />,
        name: "chat",
        path: "/chat",
        element: <Chat />,
      },
      {
        icon: <BanknotesIcon {...icon} />,
        name: "Transaction",
        path: "/transaction",
        element: <Transaction />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "Staff",
        path: "/staff",
        element: <Staff />,
      },
      {
        icon: <MegaphoneIcon {...icon} />,
        name: "Leads",
        path: "/leads",
        element: <LeadsPage />,
      },
      {
        icon: <Cog6ToothIcon {...icon} />,
        name: "Settings",
        path: "/settings",
        element: <Settings />,
      }
    ],
  },
];

export default routes;
