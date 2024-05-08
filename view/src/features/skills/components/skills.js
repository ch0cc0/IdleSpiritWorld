import { Box, LinearProgress, Stack, } from '@mui/material';
import { useState } from 'react';
import Skill from './skill';

function Skills() {

  return (
    <Box borderRadius={4} margin={3} color="#FFFFFF" backgroundColor="#373d4a
    " maxWidth="50rem" sx={{ width: '100%' }}>
        <Skill skillName={"Mining"}/>
        <Skill skillName={"Woodcutting"}/>
        <Skill skillName={"Fishing"}/>
        <Skill skillName={"Hunting"}/>
        <Skill skillName={"Alchemy"}/>
        <Skill skillName={"Hunting"}/>
    </Box>
  );
}

export default Skills;