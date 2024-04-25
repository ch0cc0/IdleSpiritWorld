import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import VolumeMute from '@mui/icons-material/VolumeMute';
import VolumeUp from '@mui/icons-material/VolumeUp';
import music from "../assets/among-the-cherry-blossom.mp3";

function Audio() {
    const [muted, setMuted] = useState(true);
    const audioRef = useRef();

    const toggleMute = () => {
        setMuted(!muted);
      };

    useEffect(() => {
        console.log('Audio Muted Status: ' + muted)
        const audio = audioRef.current;
        if (!muted) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [muted])

    return (
        <>
        <audio ref={audioRef} id="backgroundMusic" loop muted={muted}>
            <source src={music} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <IconButton aria-label="music_toggle" color="primary" onClick={toggleMute}>
            {muted ? <VolumeMute /> : <VolumeUp /> }
        </IconButton>
        </>
    );
}

export default Audio;