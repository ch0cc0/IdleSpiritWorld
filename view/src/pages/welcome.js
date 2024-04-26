import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function WelcomePage() {

    const auth = useSelector((state) => state.auth)
    const username = auth.userData.username;

  return (
    <Typography variant="h3" color="secondary" textAlign="center">Welcome {username}</Typography>
  );
}

export default WelcomePage;