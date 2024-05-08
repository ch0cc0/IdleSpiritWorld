import { Stack, Typography } from "@mui/material";
import DiceRoll from "./diceRoll";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { charActions } from "../../../store/char/charReducers";


function RollChar() {
    const char = useSelector((state) => state.char)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const rollChar = () => {
        console.log("click")
        if (!char.character) {
            dispatch(charActions.newChar());
        }
        navigate('/character');
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "3rem" }}>
            <Stack justifyContent="center" alignItems="center">
            <Typography variant="h1" color="secondary" textAlign="center" padding={0.5}>Roll Character</Typography>
            <div onClick={rollChar}>
                    <DiceRoll />
                </div>
            </Stack>
        </div>
    );
}
  
export default RollChar;