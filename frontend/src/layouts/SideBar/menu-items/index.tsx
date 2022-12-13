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
  to: string;
  hidden: boolean;
  icon?: React.ReactNode;
}

export const menuItems: MenuItem[] = [
  {
    item: "Dashboard",
    to: "/dashboard",
    hidden: false,
    icon: <DashboardIcon />,
  },
  {
    item: "Trials",
    to: "/trials",
    hidden: false,
    icon: <ScienceIcon />,
  },
  {
    item: "Patients",
    to: "/patients",
    hidden: false,
    icon: <PeopleIcon />,
  },
  {
    item: "Test",
    to: "/test",
    hidden: false,
    icon: <BugReportIcon />,
  },
  {
    item: "Login",
    to: "/login",
    hidden: false,
    icon: <LoginIcon />,
  },
  {
    item: "Register",
    to: "/register",
    hidden: false,
    icon: <InboxIcon />,
  },
  {
    item: "Settings",
    to: "/setting",
    hidden: false,
    icon: <SettingsIcon />,
  },
  {
    item: "Logout",
    to: "/logout",
    hidden: false,
    icon: <Logout />,
  },
];
