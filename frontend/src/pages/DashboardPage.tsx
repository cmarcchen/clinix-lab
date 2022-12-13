import { useAuthState } from "../context/Auth";

export function DashboardPage() {
  const user = useAuthState();
  return <h1>{user.token}</h1>;
}

export default DashboardPage;
