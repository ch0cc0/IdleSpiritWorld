import { Stack, Typography } from "@mui/material";
import LoginButton from "../features/auth/components/login/loginButton";
import SignUpButton from "../features/auth/components/signUp/signUpButton";
import { useState } from "react";

function AuthPage() {
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh" }}>
      <Stack justifyContent="center" alignItems="center" spacing={10}>
        <Typography variant="h1" color="secondary" textAlign="center">IDLE SPIRIT WORLD</Typography>
        <Stack direction="row" spacing={5}>
          <LoginButton signUpFormOpen={signUpFormOpen} setSignUpFormOpen={setSignUpFormOpen} loginFormOpen={loginFormOpen} setLoginFormOpen={setLoginFormOpen}/>
          <SignUpButton signUpFormOpen={signUpFormOpen} setSignUpFormOpen={setSignUpFormOpen} loginFormOpen={loginFormOpen} setLoginFormOpen={setLoginFormOpen}/>
        </Stack>
      </Stack>
    </div>
  );
}

export default AuthPage;