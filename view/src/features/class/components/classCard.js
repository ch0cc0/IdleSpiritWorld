import { Avatar, Box, Stack, SvgIcon, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ReactComponent as Sword } from "../../../assets/svg/sword.svg"
import { LargerButton } from "../../../components/ui/button";

function ClassCard({inView, classObject, focused, toggleFocus}) {
    
    return (
         <Box borderRadius={4}  margin={3} 
         color="#FFFFFF" backgroundColor="#373d4a" maxWidth="26rem" width="80vw" sx={{ cursor: "grab", 
         '&:active': {
             cursor: 'grabbing',
           }, userSelect: 'none', }}>
            <motion.div sx={{borderRadius: 16}} animate={{
            boxShadow: inView ? "0px 0px 10px 5px #00a86b" : "none",
            borderRadius: "16px",
            transition: {
                boxShadow: {
                    yoyo: Infinity, // This will loop the boxShadow animation indefinitely
                    duration: 0.5,
                },
            },            
            }}>
                <Stack margin={2} padding={2}>
                    <Stack direction="row" paddingBottom={2} spacing={1}>
                        <Box paddingTop={2} paddingRight={2}>
                        <Avatar aria-label="class-logo" sx={{ bgcolor: "#FFFFFF", }}>
                            <SvgIcon component={Sword} inheritViewBox sx={{width: "75%", height: "auto"}}/>
                        </Avatar>
                        </Box>
                        <Stack>
                            <Typography variant="h3" color="primary">{classObject.name}</Typography>
                            <Typography variant="h5" color="primary">Primary Stat - {classObject.primaryStat}</Typography>
                        </Stack>
                    </Stack>
                    <Box sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 370px)' }}>
                        <Typography variant="h4" color="primary">Requirements:</Typography>
                        <Typography variant="h5" color="secondary" gutterBottom>{classObject.requirements}</Typography>
                        <Typography variant="h4" color="primary">Class Description: </Typography>
                        <Typography variant="h5" color="secondary" gutterBottom >{classObject.description}</Typography>
                        <Typography variant="h4" color="primary">Effects:</Typography>
                        <Typography variant="h5" color="secondary">{classObject.effects}</Typography>
                        <Typography variant="h5" color="secondary">{classObject.scales}</Typography>
                    </Box>
                    {focused ? <LargerButton onClick={toggleFocus}>Unfocus</LargerButton> : <LargerButton onClick={toggleFocus}>Focus</LargerButton> }
                </Stack>
            </motion.div>
         </Box>
    );
}

export default ClassCard;