import styled from "styled-components";
import { ReactComponent as OneDie } from "../../../assets/svg/dice/1die.svg"
import { ReactComponent as TwoDie } from "../../../assets/svg/dice/2die.svg"
import { ReactComponent as ThreeDie } from "../../../assets/svg/dice/3die.svg"
import { ReactComponent as FourDie } from "../../../assets/svg/dice/4die.svg"
import { ReactComponent as FiveDie } from "../../../assets/svg/dice/5die.svg"
import { ReactComponent as SixDie } from "../../../assets/svg/dice/6die.svg"
import { ReactComponent as NatOne } from "../../../assets/svg/dice/nat1.svg"
import { createElement, useEffect, useRef, useState } from "react";

const DiceContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;
`;


const DiceWrapper = styled.div`
  width: 100%;
  max-width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: shake 0.5s ease infinite;
    transform: scale(1.1);
  }

  @keyframes shake {
    0% {
      transform: translateX(0) rotateZ(0deg);
    }
    25% {
      transform: translateX(-5px) rotateZ(-20deg);
    }
    50% {
      transform: translateX(5px) rotateZ(20deg);
    }
    75% {
      transform: translateX(-5px) rotateZ(-20deg);
    }
    100% {
      transform: translateX(0) rotateZ(0deg);
    }
  }
`;

const diceOptions = [TwoDie, ThreeDie, FourDie, FiveDie, SixDie, NatOne];


function DiceRoll() {
    
    const [currentDie, setCurrentDie] = useState(OneDie);
    const [isHovering, setIsHovering] = useState(false);

    const rollDie = () => {
        const randomIndex = Math.floor(Math.random() * diceOptions.length);
        setCurrentDie(diceOptions[randomIndex]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
          rollDie();
        }, 700);
        return () => clearInterval(interval);
    }, []);

    const onHover = () => {
        setIsHovering(true);
    };

    const onHoverExit = () => {
        setIsHovering(false)
    }

    return (
        <DiceContainer>
            <DiceWrapper onMouseEnter={onHover} onMouseLeave={onHoverExit} >
            {currentDie && createElement(currentDie, { style: { transform: "scale(0.4)" } })}
            </DiceWrapper>
        </DiceContainer>

    );
}
  
export default DiceRoll;