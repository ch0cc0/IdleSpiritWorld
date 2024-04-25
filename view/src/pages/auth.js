import { Stack, Typography } from "@mui/material";
import LoginButton from "../features/auth/components/login/loginButton";
import SignUpButton from "../features/auth/components/signUp/signUpButton";

function AuthPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Stack justifyContent="center" alignItems="center" spacing={5}>
        <Typography variant="h1" color="secondary" textAlign="center">IDLE SPIRIT WORLD</Typography>
        <Stack direction="row" spacing={5}>
          <LoginButton/>
          <SignUpButton/>
        </Stack>
      </Stack>
    </div>
  );
}

export default AuthPage;