import { useState } from 'react';
import LoginForm from './loginForm';
import { LargerButton } from '../button';

function LoginButton() {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleSubmit = () => {

    };

    return (
        <>
            <LargerButton variant="outlined" onClick={handleOpen} size="large">Login</LargerButton>
            <LoginForm open={open} handleClose={handleClose} handleSubmit={handleSubmit}/>
        </>
    );
}
  
export default LoginButton;