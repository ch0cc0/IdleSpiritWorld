import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import NameField from "./nameField";
import Stats from "./stats";
import { useNavigate } from "react-router-dom";
import HpStat from "./hpStat";

function Character() {
    const char = useSelector((state) => state.char)
    const navigate = useNavigate();

    useEffect(() => {
        if (!char.character) {
            navigate('/');
        }
    }, []);

    const lvl = char.character.lvl ? char.character.lvl : undefined;

    return (
        <Box borderRadius={4}  margin={3} color="#FFFFFF" backgroundColor="#373d4a" maxWidth="26rem" width="80vw">
            <Stack margin={2} padding={2} spacing={2}  justifyContent="center">
            <Typography variant="h2" color="primary">Stats Card</Typography>
            <Typography variant="h4" color="primary">lvl {lvl}</Typography>
                <Stack direction="row" spacing={2}>
                    <NameField />
                    <HpStat />
                </Stack> 
                <Stats />
            </Stack>
        </Box>
        
    );
}
  
export default Character;