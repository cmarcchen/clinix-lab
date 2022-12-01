import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="flex flex-col text-white bg-blue-900 p-2 gap-2 h-screen">
      <Link to="/trials">Trials</Link>
      <Link to="/patients">Patients</Link>
      <Link to="/test">Test</Link>
    </nav>
  );
}
