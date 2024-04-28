import { useState } from 'react';
import validator from 'validator';

import { LargerButton } from '../../../../components/ui/button';
import SignUpForm from './signUpForm';

import { useDispatch, useSelector } from "react-redux";
import {signupUser, loginUser} from '../../../../store/auth/authActions';
import App from '../../../../App';

function SignUpButton({signUpFormOpen, setSignUpFormOpen, loginFormOpen, setLoginFormOpen}) {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        console.log("Username: " + e.target.value);
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        console.log("Email: " + e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleClose = () => {
        setSignUpFormOpen(false);
    };

    const handleOpen = () => {
        if (loginFormOpen) {
            setLoginFormOpen(false);
        }
        setSignUpFormOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const sanitizedUsername = validator.escape(validator.trim(username));
        const sanitizedEmail = validator.escape(validator.trim(email));
        const sanitizedPassword = validator.escape(validator.trim(password));

        const signUpData = {
            username: sanitizedUsername,
            email: sanitizedEmail,
            password: sanitizedPassword,
        };
      
        console.log(`Attempting to Sign Up as ${signUpData.username}`);
    
        try {
            await dispatch(signupUser(signUpData));
            if (auth.signUpSuccess) {App.showAlert('Sign Up Success', 'success')};
            console.log('Signup successful');
            dispatch(loginUser({ username: sanitizedUsername, password: sanitizedPassword}))
        } catch (error) {
            console.error('Error during signup:', error);
        }
        
    };
    
    return (
        <>
            <LargerButton variant="outlined" onClick={handleOpen} size="large">Sign Up</LargerButton>
            <SignUpForm open={signUpFormOpen} handleClose={handleClose} handleSubmit={handleSubmit}
            username={username} email={email} password={password} 
            handleUsernameChange={handleUsernameChange} handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} />
        </>
    );
}
  
export default SignUpButton;