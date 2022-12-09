import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";
import { MainAppBar } from "./MainAppBar";
import { Box, Toolbar, Typography, Drawer } from "@mui/material";

export function MainLayout() {
  return (
    <div>
      <MainAppBar />
      <SideBar />
      <Box component="main" sx={{ marginLeft: "240px", flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div className="flex justify-center">
          <Outlet />
        </div>
      </Box>
    </div>
  );
}

export default MainLayout;
