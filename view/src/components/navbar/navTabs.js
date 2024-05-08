import { Stack, Tabs } from "@mui/material";
import { useState } from "react";
import { StyledTab } from "../ui/tabs";

function NavTabs() {
    const [value, setValue] = useState(1);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Stack direction="row">
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" variant="scrollable" scrollButtons={true} allowScrollButtonsMobile >
                <StyledTab sx={{color: 'rgba(255, 255, 255, 0.7)'}} label="Character" value={1}/>
                <StyledTab label="Sect" value={2} disabled />
            </Tabs>
        </Stack>
    );
}

export default NavTabs;