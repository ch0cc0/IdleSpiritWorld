import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { logoutUser } from "../../../store/auth/authActions";

function LogoutButton() {
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    };

    return (
        <Button variant="outlined" onClick={logout}>
            Logout
        </Button>
    );
}
  
export default LogoutButton;