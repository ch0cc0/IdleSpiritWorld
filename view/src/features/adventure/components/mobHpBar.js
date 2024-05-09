import { Box, LinearProgress, } from '@mui/material';

function MobHpBar({hp}) {
  return (
        <Box sx={{ width: '100%'}}>
            <LinearProgress variant="determinate" value={hp}  sx={{ height: 10, borderRadius: 4 }}/>
        </Box>
  );
}

export default MobHpBar;