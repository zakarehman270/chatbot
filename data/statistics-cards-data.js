import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  EyeIcon,
  ChatBubbleBottomCenterIcon,
  CalendarDaysIcon,
  MegaphoneIcon,
  ClockIcon
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: EyeIcon,
    title: "Today's Interactions",
    value: "120",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "blue",
    icon: MegaphoneIcon,
    title: "Today Lead",
    value: "30",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Average Session Time",
    value: "34",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: ClockIcon,
    title: "Today Session Time",
    value: "20",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
  {
    color: "blue",
    icon: MegaphoneIcon,
    title: "Real Agent Session (Today)",
    value: "10/20",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
