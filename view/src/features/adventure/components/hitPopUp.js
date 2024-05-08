import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const HitPopUp = ({ position }) => {
    const { x, y } = position;

    const xPos = x;
    const yPos = y;

    return (
        <motion.div
        initial={{ opacity: 1, y: yPos-20, x: xPos }}
        animate={{ opacity: 0, y: yPos - 70, x: xPos + 70 }}
        transition={{ duration: 1 }}
        style={{ position: 'fixed', left: 0, top: 0, cursor: 'pointer' }}
        >
        <Typography variant='h4' color="primary">+1</Typography>
        </motion.div>
    );
};

export default HitPopUp;