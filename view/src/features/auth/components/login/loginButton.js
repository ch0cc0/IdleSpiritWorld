import { useState } from 'react';
import validator from 'validator';

import LoginForm from './loginForm';
import { LargerButton } from '../../../../components/ui/button';


import { useDispatch } from "react-redux";
import {loginUser} from '../../../../store/auth/authActions';

function LoginButton({signUpFormOpen, setSignUpFormOpen, loginFormOpen, setLoginFormOpen}) {
    
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        console.log("Username: " + e.target.value);
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleClose = () => {
        setLoginFormOpen(false);
    };
    
    const handleOpen = () => {
        if (signUpFormOpen) {
            setSignUpFormOpen(false);
        }
        setLoginFormOpen(true);
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
            <LoginForm open={loginFormOpen} handleClose={handleClose} handleSubmit={handleSubmit}
             username={username} password={password} handleUsernameChange={handleUsernameChange} handlePasswordChange={handlePasswordChange}/>
        </>
    );
}
  
export default LoginButton;