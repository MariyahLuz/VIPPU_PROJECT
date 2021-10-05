// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Notifications from "@material-ui/icons/Notifications";
import CasesIcon from "@mui/icons-material/Cases";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import IconsPage from "views/Icons/Icons.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import TransferedPage from "views/Transfered/Transfered.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/addemployee",
    name: "Add New Employee",
    icon: PersonAddIcon,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/employeedata",
    name: "Employee Data",
    icon: AutoStoriesIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/cases",
    name: "Court Cases",
    icon: CasesIcon,
    component: IconsPage,
    layout: "/admin",
  },
  {
    path: "/transfered",
    name: "Transfered Officers",
    icon: TransferWithinAStationIcon,
    component: TransferedPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
