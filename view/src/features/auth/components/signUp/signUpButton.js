import { useState } from 'react';
import { LargerButton } from '../../../../components/ui/button';
import SignUpForm from './signUpForm';

function SignUpButton() {
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
            <LargerButton variant="outlined" onClick={handleOpen} size="large">Sign Up</LargerButton>
            <SignUpForm open={open} handleClose={handleClose} handleSubmit={handleSubmit} />
        </>
    );
}
  
export default SignUpButton;