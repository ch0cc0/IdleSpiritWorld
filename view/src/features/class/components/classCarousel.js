import { Stack } from "@mui/material";
import ClassCard from "./classCard";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fighter, mage, hunter, pickpocket, peasant } from "../../../utils/classCardObjects";
import { useSelector } from "react-redux";

function ClassCarousel() {
    const char = useSelector(state => state.char)
    const classArray = [ fighter, mage, hunter, pickpocket, peasant ];
    console.log(char.character)


    const [focusedIndex, setFocusedIndex] = useState(null);

    const toggleFocusIndex = (index) => {
        setFocusedIndex((prevIndex) => (prevIndex === index ? null : index))
    };

    const dragX = useMotionValue(0);

    const DRAG_BUFFER = 33;

    const [cardIndex, setCardIndex] = useState(0);
    const containerRef = useRef(null);    
    const [containerWidth, setContainerWidth] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        const updateWidth = () => {
          if (elementRef.current) {
            setCardWidth(elementRef.current.clientWidth);
          }
          if (containerRef.current) {
            setContainerWidth(containerRef.current.clientWidth);
          }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
    
        return () => {
          window.removeEventListener('resize', updateWidth);
        };
      }, []);

    const onDragStart = () => {
        console.log("start");
    }

    const onDragEnd = () => {
        console.log("end");

        const x = dragX.get();

        if ( x <= -DRAG_BUFFER && cardIndex < classArray.length-1) {
            setCardIndex((prevCardIndex) => prevCardIndex + 1)
        } else if (x >= DRAG_BUFFER && cardIndex > 0) {
            setCardIndex((prevCardIndex) => prevCardIndex - 1)
        }
    }

    return (
        <motion.div 
            ref={containerRef}
            drag="x"
            style={{
                x: dragX,
            }}
            dragTransition={{ power: 0.1 }}
            dragConstraints={{
                left: 0,
                right: 0,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            animate={{ translateX: `${ (containerWidth/2) - (cardIndex * (cardWidth + 16)) - (cardWidth*0.5)}px` }}>
            <Stack direction="row" spacing={2} >
                {Object.keys(char.character.classes).map((className, index) => (
                    <motion.div key={index} ref={elementRef} animate={{
                        scale: cardIndex === index ? 1.1 : 0.7,
                    }}>
                        <ClassCard
                            inView={cardIndex === index}
                            focused={focusedIndex === index}
                            classObject={char.character.classes[className]}
                            toggleFocus={() => toggleFocusIndex(index)}
                        />
                    </motion.div>
                ))}
            </Stack>
        </motion.div>
        
    );
}
  
export default ClassCarousel;