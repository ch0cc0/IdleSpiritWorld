import { useSelector } from "react-redux";
import Character from "../features/character/components/character";
import { Box } from "@mui/material";
import Skills from "../features/skills/components/skills";

function SkillsPage() {


  return (
    <Box display="flex" justifyContent="center" >
      <Skills />
    </Box>    
  );
}

export default SkillsPage;