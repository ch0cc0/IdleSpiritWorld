import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import MobHpBar from "./mobHpBar";
import { useState } from "react";
import { mobActions } from "../../../store/mob/mobReducers";
import { useDispatch } from "react-redux";

function MobSpawn({ onClick, mob, sprite, hp}) {
  const dispatch = useDispatch()
  const normalise = (value) => ((value) * 100) / (mob.hp);
  const denormalise = (value) => ((value) * mob.hp) / (100);

  const [mobHP, setMobHP] = useState(normalise(hp));

  const dmg = () => {
    setMobHP((prevHp) => {
      if (prevHp === 0) {
        dispatch(mobActions.mobDied())
      }
      const denormalisedHp = denormalise(prevHp);
      const newHp = normalise(denormalisedHp - 1);
      return newHp;
    })
  };

  return (
      <Stack alignItems="center" sx={{userSelect: 'none'}}>
          <Typography variant="h1" color="secondary" paddingTop={4}>{mob.name}</Typography>
          <MobHpBar hp={mobHP} />
          <motion.div
              onClick={(e) => {
                onClick(e);
                dmg();
              }}
              animate={{ x: [null, '-80vw'] }}
              whileTap={{ scale: 0.95, x: '-75vw' }}
              style={{ cursor: 'pointer' }}
          >
              <img style={{ width: '11rem', height: '11rem', transform: 'translateX(80vw)' }} src={sprite} alt="Mob" draggable="false" />
          </motion.div>
      </Stack>
  );
}

export default MobSpawn;