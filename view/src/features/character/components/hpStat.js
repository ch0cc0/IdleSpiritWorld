import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import Heart from "../../../assets/svg/heart.svg"
import styled from "styled-components";

// Styled component for the heart SVG
const HeartContainer = styled.div`
  width: 65px; // Adjust the size as needed
  height: 65px; // Adjust the size as needed
  background-image: url(${Heart});
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`;

// Styled component for the text inside the heart
const TextInsideHeart = styled(Typography)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function HpStat() {
    const char = useSelector((state) => state.char)

    return (
        <Stack direction="row" spacing={2}>
        <HeartContainer >
          <TextInsideHeart variant="h2"style={{ color: '#ff5722' }}>{char ? char.character.hp : null}</TextInsideHeart>
        </HeartContainer>
      </Stack>
    );
}
  
export default HpStat;