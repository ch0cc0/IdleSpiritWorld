import { Backdrop, Box, Stack, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { LargerButton } from '../../../../components/ui/button';

function SignUpForm({open, handleClose, handleSubmit, username, email, password, handleUsernameChange, handleEmailChange, handlePasswordChange}) {
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
            }} 
            onClick={handleFormClick}
            component="form"
            onSubmit={handleSubmit}
            autoComplete="off">
                <Box 
                sx={{
                    margin: 2,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                    bgcolor: 'primary.dark',
                    },
                }}
                >
                    <Stack padding={1} spacing={1}>
                        <TextField 
                        id="newUsername"
                        value={username}
                        onChange={handleUsernameChange}
                        label="Username" 
                        variant="filled"
                        name="username"
                        autoComplete="username"
                        required/>
                        <TextField 
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        label="Email" 
                        variant="filled"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required/>
                        <TextField 
                        id="newPassword"
                        value={password}
                        onChange={handlePasswordChange}
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