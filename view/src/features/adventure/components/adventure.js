import MobSpawn from "./mobSpawn";
import HitPopUp from "./hitPopUp";
import { useEffect, useState } from "react";

function Adventure() {

  const [notifications, setNotifications] = useState([]);

  const handleMobSpawnClick = (event) => {
    const { clientX, clientY } = event;
    const newNotification = { x: clientX, y: clientY };
    setNotifications([...notifications, newNotification]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.slice(1));
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [notifications]);

  return (
    <>
    <MobSpawn onClick={handleMobSpawnClick} />
    {notifications.map((notification, index) => (
        <HitPopUp key={index} position={notification} />
      ))}
    </> 
  );
}

export default Adventure;