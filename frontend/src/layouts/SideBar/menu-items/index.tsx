import InboxIcon from "@mui/icons-material/MoveToInbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ScienceIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import BugReportIcon from "@mui/icons-material/BugReport";
import LoginIcon from "@mui/icons-material/Login";
import SettingsIcon from "@mui/icons-material/Settings";
import { Logout } from "@mui/icons-material";

interface MenuItem {
  item: string;
  name: string;
  to: string;
  hidden: boolean;
  icon?: React.ReactNode;
}

export const menuItems: MenuItem[] = [
  {
    item: "Dashboard",
    name: "dashboard",
    to: "/dashboard",
    hidden: false,
    icon: <DashboardIcon />,
  },
  {
    item: "Trials",
    name: "trials",
    to: "/trials",
    hidden: false,
    icon: <ScienceIcon />,
  },
  {
    item: "Patients",
    name: "patients",
    to: "/patients",
    hidden: false,
    icon: <PeopleIcon />,
  },
  {
    item: "Test",
    name: "test",
    to: "/test",
    hidden: false,
    icon: <BugReportIcon />,
  },
  {
    item: "Login",
    name: "login",
    to: "/login",
    hidden: false,
    icon: <LoginIcon />,
  },
  {
    item: "Register",
    name: "register",
    to: "/register",
    hidden: false,
    icon: <InboxIcon />,
  },
  {
    item: "Settings",
    name: "setting",
    to: "/setting",
    hidden: false,
    icon: <SettingsIcon />,
  },
  {
    item: "Logout",
    name: "logout",
    to: "/logout",
    hidden: false,
    icon: <Logout />,
  },
];
