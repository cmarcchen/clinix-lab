import { SideBar } from "./SideBar";
import { matchPath, Outlet, useLocation } from "react-router-dom";
import { MainAppBar } from "./MainAppBar";
import { Alert, Box, Toolbar } from "@mui/material";
import { useAuthState } from "../context/Auth";

export function MainLayout() {
  const auth = useAuthState();
  const { pathname } = useLocation();

  const path = "/:route/*";
  const match = matchPath(path, pathname);

  const route = match?.params.route;

  const AllAccessPages = ["login", "register", "logout"];

  return (
    <div>
      <MainAppBar />
      <SideBar />
      <Box component="main" sx={{ marginLeft: "240px", flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="flex justify-center p-8">
          {auth.token || AllAccessPages.includes(route!) ? (
            <Outlet />
          ) : (
            <Alert severity="error">
              Access Denied, Please Login or Register
            </Alert>
          )}
        </div>
      </Box>
    </div>
  );
}

export default MainLayout;
