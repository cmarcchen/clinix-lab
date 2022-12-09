import { SideBar } from "./SideBar";
import { Outlet } from "react-router-dom";
import { MainAppBar } from "./MainAppBar";
import { Container } from "@mui/system";

export function MainLayout() {
  return (
    <div>
      <MainAppBar />
      <div className="flex">
        <SideBar />

        <Container
          sx={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default MainLayout;
