import { Box, Button, LinearProgress, Stack, Typography, } from '@mui/material';
import { useState } from 'react';

function Skill({skillName}) {
    const [progress, setProgress] = useState(0);

    const click = () => {
        setProgress((prevProgress) => {
            if (prevProgress === 100) {
                return 0;
              }
            
            const diff = Math.random() * 10;
            return Math.min(prevProgress + diff, 100);
        })
    }

  return (
    <Stack justifyContent="center" onClick={click} alignItems="center" spacing={1} padding={1} paddingBottom={2}>
        <Typography variant='h2'>{skillName}</Typography>
        <Box sx={{ width: '80%'}}>
            <LinearProgress variant="determinate" value={progress}  sx={{ height: 10, borderRadius: 4 }}/>
        </Box>
    </Stack>
  );
}

export default Skill;