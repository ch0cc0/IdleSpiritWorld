import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import RollChar from "../features/characterCreation/components/rollChar"
import { LargerButton } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

function WelcomePage() {

    const auth = useSelector((state) => state.auth);
    const char = useSelector((state) => state.char);

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/character');
    };

  return (
    <>
      {char && char.character ?
       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem" }}>
        <Stack spacing={4}>
          <Typography variant="h2" color="primary">Welcome {auth.userData.username}</Typography>
          <LargerButton variant="outlined" onClick={handleButtonClick}>View Character</LargerButton>
        </Stack>
       </div> 
      : <RollChar />}
      
    </>    
  );
}

export default WelcomePage;