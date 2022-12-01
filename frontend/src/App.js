import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Clinix Lab</h1>
      <div className="flex gap-4">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
