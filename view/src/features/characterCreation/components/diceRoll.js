import { Stack, Typography } from "@mui/material";


function RollChar() {


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
            <Stack justifyContent="center" alignItems="center" spacing={10}>
            <Typography variant="h1" color="secondary" textAlign="center" padding={0.5}>Roll Character</Typography>
            
            </Stack>
        </div>
    );
}
  
export default RollChar;