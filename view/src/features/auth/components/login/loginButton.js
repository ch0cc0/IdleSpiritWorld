import { useState } from 'react';
import LoginForm from './loginForm';
import { LargerButton } from '../../../../components/ui/button';
import validator from 'validator';

import { useDispatch } from "react-redux";
import {loginUser} from '../../../../store/auth/authActions';

function LoginButton() {
    
    const dispatch = useDispatch();
      

    const [open, setOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        console.log("Username: " + e.target.value);
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        console.log("Password: " + e.target.value);
        setPassword(e.target.value);
    }


    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const sanitizedUsername = validator.escape(validator.trim(username));
        const sanitizedPassword = validator.escape(validator.trim(password));

        const loginData = {
            username: sanitizedUsername,
            password: sanitizedPassword,
        };
      
        console.log(`Attempting to Log in as ${loginData.username}`);
    
        dispatch(loginUser(loginData));
    };

    return (
        <>
            <LargerButton variant="outlined" onClick={handleOpen} size="large">Login</LargerButton>
            <LoginForm open={open} handleClose={handleClose} handleSubmit={handleSubmit}
             username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange}/>
        </>
    );
}
  
export default LoginButton;