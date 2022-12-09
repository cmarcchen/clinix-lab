import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <nav className="flex flex-col text-white bg-blue-700 p-2 gap-2 h-screen">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/trials">Trials</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/test">Test</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}
