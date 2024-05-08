import { Stack, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getColorForStat, getColorForRoll } from "../../../utils/helper_funcs";


function Stat({stat}) {
    if (stat !== 'str' && stat !== 'dex' && stat !== 'int' 
    && stat !== 'con' && stat !== 'wis'  && stat !== 'cha') {
        throw new Error("Invalid stat prop.");
    }
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const char = useSelector((state) => state.char)

    const charStat = char && char.character ? char.character[stat] : null;

    const formattedStat = stat.charAt(0).toUpperCase() + stat.slice(1);

    return (
        <Stack direction="row" spacing={2}>
            <Typography variant="h2">{formattedStat}:</Typography> 
            <Typography variant="h2" onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
            style={{ color: charStat ? getColorForStat(charStat.totalStat) : 'inherit' }} >{charStat ? charStat.totalStat : null}</Typography>
            {charStat && isHovered ? 
            <Typography variant="h4">(<span style={{ color: charStat ? getColorForRoll(charStat.firstDie) : 'inherit' }}>{charStat.firstDie}</span>+
            <span style={{ color: charStat ? getColorForRoll(charStat.secondDie) : 'inherit' }}>{charStat.secondDie}</span>+
            <span style={{ color: charStat ? getColorForRoll(charStat.thirdDie) : 'inherit' }}>{charStat.thirdDie}</span>)</Typography> : null}
        </Stack>
    );
}
  
export default Stat;