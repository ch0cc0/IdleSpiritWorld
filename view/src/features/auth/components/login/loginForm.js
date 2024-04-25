import { Backdrop, Box, Stack, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { LargerButton } from '../button';

function LoginForm({open, handleClose, handleSubmit}) {
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
                        autoFocus
                        id="username" 
                        label="Username" 
                        name="username" 
                        autoComplete="username" 
                        variant="filled" />
                        <TextField 
                        id="password"
                        name="password"
                        label="Password" 
                        type="password"
                        autoComplete="current-password"
                        variant="filled" />
                    </Stack>
                </Box>
                <LargerButton type='submit' variant="contained" endIcon={<LoginIcon />}>
                Login
                </LargerButton>
            </Stack>
        </Backdrop>
    );
}
  
export default LoginForm;