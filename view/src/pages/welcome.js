import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import RollChar from "../features/characterCreation/components/rollChar"

function WelcomePage() {

    const auth = useSelector((state) => state.auth)
    const username = auth.userData.username;

  return (
    <>
      <Typography variant="h3" color="secondary" textAlign="center" padding={1}>Welcome {username}</Typography>
      {/* TODO: Add hasCharacter Check too*/}
      <RollChar />
    </>    
  );
}

export default WelcomePage;