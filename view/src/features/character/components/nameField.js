import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CustomTextField}  from "../../../components/ui/customTextField";
import { charActions } from "../../../store/char/charReducers";

function NameField() {
    const dispatch = useDispatch();

    const char = useSelector((state) => state.char)

    const [charName, setCharName] = useState(() => {
        if (char.name) {
            return char.name;
        } else {
            return undefined;
        }
    })

    const changeCharName = async (e) => {
        console.log(e.target.value);
        dispatch(charActions.name(e.target.value));
        console.log(char.name);
    };

    return (
            <CustomTextField label={"Name"} value={charName} onInput={changeCharName} color="secondary" variant="outlined" 
            id="name" InputProps={{ style: { fontSize: '2rem' } }} InputLabelProps={{ style: { fontSize: '1.5rem', } }}/>
    );
}
  
export default NameField;