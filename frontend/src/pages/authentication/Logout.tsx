import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout, useAuthDispatch } from "../../context/Auth";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (dispatch) {
      logout(dispatch);
    }
    navigate("/login");
  }, []);
  return <></>;
}

export default Logout;
