import { Stack } from "@mui/material";

import Audio from "../audio";
import Logout from "../../features/auth/components/logout";
import NavTabs from "./navTabs";
import { useSelector } from "react-redux";

function NavBar() {
    const auth = useSelector((state) => state.auth);
    
    return (
        <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" justifyContent="flex-start">
                <Audio />
            </Stack>
            {/* TODO: Add hasCharacter Check too*/}
            {auth.isAuthenticated ? <NavTabs /> : null }
            <Stack direction="row" justifyContent="flex-end">
                {auth.isAuthenticated ? <Logout /> : null}
            </Stack>
        </Stack>
    );
}

export default NavBar;