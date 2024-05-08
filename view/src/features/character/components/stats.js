import { Box, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CustomTextField}  from "../../../components/ui/customTextField";
import { charActions } from "../../../store/char/charReducers";
import NameField from "./nameField";
import Stat from "./stat";

function Stats() {

    return (
        <Box>
            <Stat stat={'str'} />
            <Stat stat={'dex'} />
            <Stat stat={'con'} />
            <Stat stat={'int'} />
            <Stat stat={'wis'} />
            <Stat stat={'cha'} />
        </Box>
        
    );
}
  
export default Stats;