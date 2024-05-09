import MobSpawn from "./mobSpawn";
import HitPopUp from "./hitPopUp";
import { mobActions } from "../../../store/mob/mobReducers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Adventure() {

  const mob = useSelector(state => state.mob);

  const dispatch = useDispatch();

  const [notifications, setNotifications] = useState([]);

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const newNotification = { x: clientX, y: clientY };
    setNotifications([...notifications, newNotification]);
  };

  useEffect(() => {
    if (mob && mob.mobDead) {
      console.log('Mob Spawn');
      dispatch(mobActions.spawnMob());
    }
  }, [mob, mob.mobDead]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [notifications]);

  return (
    <>
      {mob && mob.mobSprite && mob.mobState ?
        (
          <>
            <MobSpawn onClick={handleClick} mob={mob.mobState} sprite={mob.mobSprite} hp={mob.hp}/>
            {notifications.map((notification, index) => (
              <HitPopUp key={index} position={notification} />
            ))}
          </>
        )
        :
        null
      }
    </> 
  );
}

export default Adventure;