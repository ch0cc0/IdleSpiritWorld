import { AppBar, Box, IconButton, Menu, MenuItem, Stack, Toolbar } from "@mui/material";

import Audio from "../audio";
import Logout from "../../features/auth/components/logout";
import { useSelector } from "react-redux";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#282c34', color: '#00a86b' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            handleClose();
                            navigate('/character')
                        }} sx={{color: '#282c34'}}>Character</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            navigate('/class')
                        }} sx={{color: '#282c34'}}>Class</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            navigate('/adventure')
                        }} sx={{color: '#282c34'}}>Adventure</MenuItem>
                        <MenuItem onClick={() => {
                            handleClose();
                            navigate('/skills')
                        }} sx={{color: '#282c34'}}>Skills</MenuItem>
                    </Menu>
                    <Box sx={{ flexGrow: 1 }} />
                    <Stack direction="row" spacing={2}>
                        <Audio />
                        {auth.isAuthenticated ? <Logout /> : null}
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
      );
}

export default NavBar;