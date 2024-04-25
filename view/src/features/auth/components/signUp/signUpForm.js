import { Backdrop, Box, Stack, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { LargerButton } from '../button';

function SignUpForm({open, handleClose, handleSubmit}) {
    const handleFormClick = (event) => {
        // Prevent click event propagation to the backdrop
        event.stopPropagation();
    };

    return (
        <Backdrop
        sx={{ 
            color: '#fff',
            margin: 0,
            '&[style]': {
                marginLeft: '0',
            },
        }}
        open={open}
        onClick={handleClose}
        >
            <Stack sx={{
                zIndex: 100
            }} onClick={handleFormClick}>
                <Box 
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                    margin: 2,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                    bgcolor: 'primary.dark',
                    },
                }}
                onSubmit={handleSubmit}
                >
                    <Stack padding={1} spacing={1}>
                        <TextField 
                        id="username" 
                        label="Username" 
                        variant="filled"
                        name="username"
                        autoComplete="username"
                        required/>
                        <TextField 
                        id="email"
                        label="Email" 
                        variant="filled"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required/>
                        <TextField 
                        id="password" 
                        label="Password" 
                        variant="filled" 
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        required/>
                    </Stack>
                </Box>
                <LargerButton type="submit" variant="contained" endIcon={<LoginIcon />}>
                Sign Up
                </LargerButton>
            </Stack>
        </Backdrop>
    );
}
  
export default SignUpForm;