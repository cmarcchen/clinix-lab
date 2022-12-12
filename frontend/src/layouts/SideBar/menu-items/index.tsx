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
  icon?: React.ReactNode;
}

export const menuItems: MenuItem[] = [
  {
    item: "Dashboard",
    to: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    item: "Trials",
    to: "/trials",
    icon: <ScienceIcon />,
  },
  {
    item: "Patients",
    to: "/patients",
    icon: <PeopleIcon />,
  },
  {
    item: "Test",
    to: "/test",
    icon: <BugReportIcon />,
  },
  {
    item: "Login",
    to: "/login",
    icon: <LoginIcon />,
  },
  {
    item: "Register",
    to: "/register",
    icon: <InboxIcon />,
  },
  {
    item: "Settings",
    to: "/setting",
    icon: <SettingsIcon />,
  },
  {
    item: "Logout",
    to: "/logout",
    icon: <Logout />,
  },
];
