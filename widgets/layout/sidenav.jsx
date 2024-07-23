import React, { useState } from 'react';

import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";


import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftEllipsisIcon,
  AcademicCapIcon,
  //  AdjustmentsHorizontalIcon 
  //  AdjustmentsVerticalIcon 
  //  ArchiveBoxArrowDownIcon 
  //  ArchiveBoxXMarkIcon 
  //  ArchiveBoxIcon 
  //  ArrowDownCircleIcon 
  //  ArrowDownLeftIcon 
  //  ArrowDownOnSquareStackIcon 
  //  ArrowDownOnSquareIcon 
  //  ArrowDownRightIcon 
  //  ArrowDownTrayIcon 
  //  ArrowDownIcon
  //  ArrowLeftCircleIcon 
  //  ArrowLeftOnRectangleIcon 
  //  ArrowLeftIcon 
  //  ArrowLongDownIcon 
  //  ArrowLongLeftIcon 
  //  ArrowLongRightIcon 
  //  ArrowLongUpIcon 
  //  ArrowPathRoundedSquareIcon 
  //  ArrowPathIcon 
  //  ArrowRightCircleIcon 
  //  ArrowRightOnRectangleIcon 
  //  ArrowRightIcon 
  //  ArrowSmallDownIcon 
  //  ArrowSmallLeftIcon
  //  ArrowSmallRightIcon
  //  ArrowSmallUpIcon 
  //  ArrowTopRightOnSquareIcon 
  //  ArrowTrendingDownIcon 
  //  ArrowTrendingUpIcon
  //  ArrowUpCircleIcon 
  //  ArrowUpLeftIcon 
  //  ArrowUpOnSquareStackIcon } from '.
  //  ArrowUpOnSquareIcon } from './ArrowUpOnSquareIcon'
  //  ArrowUpRightIcon } from './ArrowUpRightIcon'
  //  ArrowUpTrayIcon } from './ArrowUpTrayIcon'
  //  ArrowUpIcon } from './ArrowUpIcon'
  //  ArrowUturnDownIcon } from './ArrowUturnDownIcon'
  //  ArrowUturnLeftIcon } from './ArrowUturnLeftIcon'
  //  ArrowUturnRightIcon } from './ArrowUturnRightIcon'
  //  ArrowUturnUpIcon } from './ArrowUturnUpIcon'
  //  ArrowsPointingInIcon } from './ArrowsPointingInIcon'
  //  ArrowsPointingOutIcon } from './ArrowsPointingOutIcon'
  //  ArrowsRightLeftIcon } from './ArrowsRightLeftIcon'
  //  ArrowsUpDownIcon } from './ArrowsUpDownIcon'
  //  AtSymbolIcon } from './AtSymbolIcon'
  //  BackspaceIcon } from './BackspaceIcon'
  //  BackwardIcon } from './BackwardIcon'
  //  BanknotesIcon } from './BanknotesIcon'
  //  Bars2Icon } from './Bars2Icon'
  //  Bars3BottomLeftIcon } from './Bars3BottomLeftIcon'
  //  Bars3BottomRightIcon } from './Bars3BottomRightIcon'
  //  Bars3CenterLeftIcon } from './Bars3CenterLeftIcon'
  //  Bars3Icon } from './Bars3Icon'
  //  Bars4Icon } from './Bars4Icon'
  //  BarsArrowDownIcon } from './BarsArrowDownIcon'
  //  BarsArrowUpIcon } from './BarsArrowUpIcon'
  //  Battery0Icon } from './Battery0Icon'
  //  Battery100Icon } from './Battery100Icon'
  //  Battery50Icon } from './Battery50Icon'
  //  BeakerIcon } from './BeakerIcon'
  //  BellAlertIcon } from './BellAlertIcon'
  //  BellSlashIcon } from './BellSlashIcon'
  //  BellSnoozeIcon } from './BellSnoozeIcon'
  //  BellIcon } from './BellIcon'
  //  BoltSlashIcon } from './BoltSlashIcon'
  //  BoltIcon } from './BoltIcon'
  //  BookOpenIcon } from './BookOpenIcon'
  //  BookmarkSlashIcon } from './BookmarkSlashIcon'
  //  BookmarkSquareIcon } from './BookmarkSquareIcon'
  //  BookmarkIcon } from './BookmarkIcon'
  //  BriefcaseIcon } from './BriefcaseIcon'
  //  BugAntIcon } from './BugAntIcon'
  //  BuildingLibraryIcon } from './BuildingLibraryIcon'
  //  BuildingOffice2Icon } from './BuildingOffice2Icon'
  //  BuildingOfficeIcon } from './BuildingOfficeIcon'
  //  BuildingStorefrontIcon } from './BuildingStorefrontIcon'
  //  CakeIcon } from './CakeIcon'
  //  CalculatorIcon } from './CalculatorIcon'
  //  CalendarDaysIcon } from './CalendarDaysIcon'
  //  CalendarIcon } from './CalendarIcon'
  //  CameraIcon } from './CameraIcon'
  //  ChartBarSquareIcon } from './ChartBarSquareIcon'
  //  ChartBarIcon } from './ChartBarIcon'
  //  ChartPieIcon } from './ChartPieIcon'
  //  ChatBubbleBottomCenterTextIcon } from './ChatBubbleBottomCenterTextIcon'
  //  ChatBubbleBottomCenterIcon } from './ChatBubbleBottomCenterIcon'
  //  ChatBubbleLeftEllipsisIcon } from './ChatBubbleLeftEllipsisIcon'
  //  ChatBubbleLeftRightIcon } from './ChatBubbleLeftRightIcon'
  //  ChatBubbleLeftIcon } from './ChatBubbleLeftIcon'
  //  ChatBubbleOvalLeftEllipsisIcon } from './ChatBubbleOvalLeftEllipsisIcon'
  //  ChatBubbleOvalLeftIcon } from './ChatBubbleOvalLeftIcon'
  //  CheckBadgeIcon } from './CheckBadgeIcon'
  //  CheckCircleIcon } from './CheckCircleIcon'
  //  CheckIcon } from './CheckIcon'
  //  ChevronDoubleDownIcon } from './ChevronDoubleDownIcon'
  //  ChevronDoubleLeftIcon } from './ChevronDoubleLeftIcon'
  //  ChevronDoubleRightIcon } from './ChevronDoubleRightIcon'
  //  ChevronDoubleUpIcon } from './ChevronDoubleUpIcon'
  //  ChevronDownIcon } from './ChevronDownIcon'
  //  ChevronLeftIcon } from './ChevronLeftIcon'
  //  ChevronRightIcon } from './ChevronRightIcon'
  //  ChevronUpDownIcon } from './ChevronUpDownIcon'
  //  ChevronUpIcon } from './ChevronUpIcon'
  //  CircleStackIcon } from './CircleStackIcon'
  //  ClipboardDocumentCheckIcon } from './ClipboardDocumentCheckIcon'
  //  ClipboardDocumentListIcon } from './ClipboardDocumentListIcon'
  //  ClipboardDocumentIcon } from './ClipboardDocumentIcon'
  //  ClipboardIcon } from './ClipboardIcon'
  //  ClockIcon } from './ClockIcon'
  //  CloudArrowDownIcon } from './CloudArrowDownIcon'
  //  CloudArrowUpIcon } from './CloudArrowUpIcon'
  //  CloudIcon } from './CloudIcon'
  //  CodeBracketSquareIcon } from './CodeBracketSquareIcon'
  //  CodeBracketIcon } from './CodeBracketIcon'
  //  Cog6ToothIcon } from './Cog6ToothIcon'
  //  Cog8ToothIcon } from './Cog8ToothIcon'
  //  CogIcon } from './CogIcon'
  //  CommandLineIcon } from './CommandLineIcon'
  //  ComputerDesktopIcon } from './ComputerDesktopIcon'
  //  CpuChipIcon } from './CpuChipIcon'
  //  CreditCardIcon } from './CreditCardIcon'
  //  CubeTransparentIcon } from './CubeTransparentIcon'
  //  CubeIcon } from './CubeIcon'
  //  CurrencyBangladeshiIcon } from './CurrencyBangladeshiIcon'
  //  CurrencyDollarIcon } from './CurrencyDollarIcon'
  //  CurrencyEuroIcon } from './CurrencyEuroIcon'
  //  CurrencyPoundIcon } from './CurrencyPoundIcon'
  //  CurrencyRupeeIcon } from './CurrencyRupeeIcon'
  //  CurrencyYenIcon } from './CurrencyYenIcon'
  //  CursorArrowRaysIcon } from './CursorArrowRaysIcon'
  //  CursorArrowRippleIcon } from './CursorArrowRippleIcon'
  //  DevicePhoneMobileIcon } from './DevicePhoneMobileIcon'
  //  DeviceTabletIcon } from './DeviceTabletIcon'
  //  DocumentArrowDownIcon } from './DocumentArrowDownIcon'
  //  DocumentArrowUpIcon } from './DocumentArrowUpIcon'
  //  DocumentChartBarIcon } from './DocumentChartBarIcon'
  //  DocumentCheckIcon } from './DocumentCheckIcon'
  //  DocumentDuplicateIcon } from './DocumentDuplicateIcon'
  //  DocumentMagnifyingGlassIcon } from './DocumentMagnifyingGlassIcon'
  //  DocumentMinusIcon } from './DocumentMinusIcon'
  //  DocumentPlusIcon } from './DocumentPlusIcon'
  //  DocumentTextIcon } from './DocumentTextIcon'
  //  DocumentIcon } from './DocumentIcon'
  //  EllipsisHorizontalCircleIcon } from './EllipsisHorizontalCircleIcon'
  //  EllipsisHorizontalIcon } from './EllipsisHorizontalIcon'
  //  EllipsisVerticalIcon } from './EllipsisVerticalIcon'
  //  EnvelopeOpenIcon } from './EnvelopeOpenIcon'
  //  EnvelopeIcon } from './EnvelopeIcon'
  //  ExclamationCircleIcon } from './ExclamationCircleIcon'
  //  ExclamationTriangleIcon } from './ExclamationTriangleIcon'
  //  EyeDropperIcon } from './EyeDropperIcon'
  //  EyeSlashIcon } from './EyeSlashIcon'
  //  EyeIcon } from './EyeIcon'
  //  FaceFrownIcon } from './FaceFrownIcon'
  //  FaceSmileIcon } from './FaceSmileIcon'
  //  FilmIcon } from './FilmIcon'
  //  FingerPrintIcon } from './FingerPrintIcon'
  //  FireIcon } from './FireIcon'
  //  FlagIcon } from './FlagIcon'
  //  FolderArrowDownIcon } from './FolderArrowDownIcon'
  //  FolderMinusIcon } from './FolderMinusIcon'
  //  FolderOpenIcon } from './FolderOpenIcon'
  //  FolderPlusIcon } from './FolderPlusIcon'
  //  FolderIcon } from './FolderIcon'
  //  ForwardIcon } from './ForwardIcon'
  //  FunnelIcon } from './FunnelIcon'
  //  GifIcon } from './GifIcon'
  //  GiftTopIcon } from './GiftTopIcon'
  //  GiftIcon } from './GiftIcon'
  //  GlobeAltIcon } from './GlobeAltIcon'
  //  GlobeAmericasIcon } from './GlobeAmericasIcon'
  //  GlobeAsiaAustraliaIcon } from './GlobeAsiaAustraliaIcon'
  //  GlobeEuropeAfricaIcon } from './GlobeEuropeAfricaIcon'
  //  HandRaisedIcon } from './HandRaisedIcon'
  //  HandThumbDownIcon } from './HandThumbDownIcon'
  //  HandThumbUpIcon } from './HandThumbUpIcon'
  //  HashtagIcon } from './HashtagIcon'
  //  HeartIcon } from './HeartIcon'
  //  HomeModernIcon } from './HomeModernIcon'
  //  HomeIcon } from './HomeIcon'
  //  IdentificationIcon } from './IdentificationIcon'
  //  InboxArrowDownIcon } from './InboxArrowDownIcon'
  //  InboxStackIcon } from './InboxStackIcon'
  //  InboxIcon } from './InboxIcon'
  //  InformationCircleIcon } from './InformationCircleIcon'
  //  KeyIcon } from './KeyIcon'
  //  LanguageIcon } from './LanguageIcon'
  //  LifebuoyIcon } from './LifebuoyIcon'
  //  LightBulbIcon } from './LightBulbIcon'
  //  LinkIcon } from './LinkIcon'
  //  ListBulletIcon } from './ListBulletIcon'
  //  LockClosedIcon } from './LockClosedIcon'
  //  LockOpenIcon } from './LockOpenIcon'
  //  MagnifyingGlassCircleIcon } from './MagnifyingGlassCircleIcon'
  //  MagnifyingGlassMinusIcon } from './MagnifyingGlassMinusIcon'
  //  MagnifyingGlassPlusIcon } from './MagnifyingGlassPlusIcon'
  //  MagnifyingGlassIcon } from './MagnifyingGlassIcon'
  //  MapPinIcon } from './MapPinIcon'
  //  MapIcon } from './MapIcon'
  //  MegaphoneIcon } from './MegaphoneIcon'
  //  MicrophoneIcon } from './MicrophoneIcon'
  //  MinusCircleIcon } from './MinusCircleIcon'
  //  MinusSmallIcon } from './MinusSmallIcon'
  //  MinusIcon } from './MinusIcon'
  //  MoonIcon } from './MoonIcon'
  //  MusicalNoteIcon } from './MusicalNoteIcon'
  //  NewspaperIcon } from './NewspaperIcon'
  //  NoSymbolIcon } from './NoSymbolIcon'
  //  PaintBrushIcon } from './PaintBrushIcon'
  //  PaperAirplaneIcon } from './PaperAirplaneIcon'
  //  PaperClipIcon } from './PaperClipIcon'
  //  PauseCircleIcon } from './PauseCircleIcon'
  //  PauseIcon } from './PauseIcon'
  //  PencilSquareIcon } from './PencilSquareIcon'
  //  PencilIcon } from './PencilIcon'
  //  PhoneArrowDownLeftIcon } from './PhoneArrowDownLeftIcon'
  //  PhoneArrowUpRightIcon } from './PhoneArrowUpRightIcon'
  //  PhoneXMarkIcon } from './PhoneXMarkIcon'
  //  PhoneIcon } from './PhoneIcon'
  //  PhotoIcon } from './PhotoIcon'
  //  PlayCircleIcon } from './PlayCircleIcon'
  //  PlayPauseIcon } from './PlayPauseIcon'
  //  PlayIcon } from './PlayIcon'
  //  PlusCircleIcon } from './PlusCircleIcon'
  //  PlusSmallIcon } from './PlusSmallIcon'
  //  PlusIcon } from './PlusIcon'
  //  PowerIcon } from './PowerIcon'
  //  PresentationChartBarIcon } from './PresentationChartBarIcon'
  //  PresentationChartLineIcon } from './PresentationChartLineIcon'
  //  PrinterIcon } from './PrinterIcon'
  //  PuzzlePieceIcon } from './PuzzlePieceIcon'
  //  QrCodeIcon } from './QrCodeIcon'
  //  QuestionMarkCircleIcon } from './QuestionMarkCircleIcon'
  //  QueueListIcon } from './QueueListIcon'
  //  RadioIcon } from './RadioIcon'
  //  ReceiptPercentIcon } from './ReceiptPercentIcon'
  //  ReceiptRefundIcon } from './ReceiptRefundIcon'
  //  RectangleGroupIcon } from './RectangleGroupIcon'
  //  RectangleStackIcon } from './RectangleStackIcon'
  //  RocketLaunchIcon } from './RocketLaunchIcon'
  //  RssIcon } from './RssIcon'
  //  ScaleIcon } from './ScaleIcon'
  //  ScissorsIcon } from './ScissorsIcon'
  //  ServerStackIcon } from './ServerStackIcon'
  //  ServerIcon } from './ServerIcon'
  //  ShareIcon } from './ShareIcon'
  //  ShieldCheckIcon } from './ShieldCheckIcon'
  //  ShieldExclamationIcon } from './ShieldExclamationIcon'
  //  ShoppingBagIcon } from './ShoppingBagIcon'
  //  ShoppingCartIcon } from './ShoppingCartIcon'
  //  SignalSlashIcon } from './SignalSlashIcon'
  //  SignalIcon } from './SignalIcon'
  //  SparklesIcon } from './SparklesIcon'
  //  SpeakerWaveIcon } from './SpeakerWaveIcon'
  //  SpeakerXMarkIcon } from './SpeakerXMarkIcon'
  //  Square2StackIcon } from './Square2StackIcon'
  //  Square3Stack3DIcon } from './Square3Stack3DIcon'
  //  Squares2X2Icon } from './Squares2X2Icon'
  //  SquaresPlusIcon } from './SquaresPlusIcon'
  //  StarIcon } from './StarIcon'
  //  StopCircleIcon } from './StopCircleIcon'
  //  StopIcon } from './StopIcon'
  //  SunIcon } from './SunIcon'
  //  SwatchIcon } from './SwatchIcon'
  //  TableCellsIcon } from './TableCellsIcon'
  //  TagIcon } from './TagIcon'
  //  TicketIcon } from './TicketIcon'
  //  TrashIcon } from './TrashIcon'
  //  TrophyIcon } from './TrophyIcon'
  //  TruckIcon } from './TruckIcon'
  //  TvIcon } from './TvIcon'
  //  UserCircleIcon 
  //  UserGroupIcon 
  //  UserMinusIcon 
  //  UserPlusIcon 
  //  UserIcon 
  //  UsersIcon 
  //  VariableIcon 
  //  VideoCameraSlashIcon 
  //  VideoCameraIcon 
  //  ViewColumnsIcon 
  //  ViewfinderCircleIcon 
  //  WalletIcon 
  //  WifiIcon 
  //  WindowIcon 
  //  WrenchScrewdriverIcon 
  //  WrenchIcon 
  //  XCircleIcon 
  //  XMarkIcon
} from "@heroicons/react/24/solid";

import { RiLogoutBoxFill } from "react-icons/ri";

export function Sidenav({ brandName, routes , setShowSweetAlert }) {
 
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-blue-gray-800 to-blue-gray-900",
    white: "bg-white shadow-lg",
    transparent: "bg-transparent",
  };

  const icon = {
    className: "w-5 h-5 text-inherit",
  };

 

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${openSidenav ? "translate-x-0" : "-translate-x-80"
        } fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      
      <div
        className={`relative border-b ${sidenavType === "dark" ? "border-white/20" : "border-blue-gray-50"
          }`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-7">
          {/* <Avatar src={brandImg} size="sm" /> */}
          <Typography
            variant="h6"
            color={sidenavType === "dark" ? "white" : "blue-gray"}
          >
            {brandName}
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <div className="m-3 outerWrapperSideNave">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-3 flex flex-col gap-1 sidebarmobnavabr">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? sidenavColor
                          : sidenavType === "dark"
                            ? "white"
                            : "blue-gray"
                      }
                      className="flex items-center gap-1 px-2 py-1 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize text-nowrap"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}



            <div className="d-flex gap-1 align-items-center text-white px-2 c_pointer" onClick={() => {
              setShowSweetAlert(true)
            }}>
              <RiLogoutBoxFill {...icon} />
              <Typography
                color="inherit"
                className="font-medium capitalize text-nowrap"
              >
                Log Out
              </Typography>
            </div>
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: "",
  brandName: "PBIB",
};

Sidenav.propTypes = {

  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
