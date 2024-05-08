import { slime } from "../../../utils/mobs/slimes";
import { getRandomSprite } from "../../../utils/mobs/funcs";
import { motion } from "framer-motion";

function MobSpawn({ onClick }) {

    const randomSlimeSprite = getRandomSprite(slime);

    return (
      <motion.div onClick={onClick}
        animate={{ x: [null, '-80vw'] }}
        whileTap={{ scale: 0.95, x: '-75vw' }}
        style={{cursor: 'pointer'}}
        >
        <img style={{width: '11rem', height: '11rem', transform: 'translateX(80vw)'}} src={randomSlimeSprite}/>
      </motion.div> 
    );
  }
  
  export default MobSpawn;