import { Box, Stack } from "@mui/material";
import ClassCarousel from "../features/class/components/classCarousel";
import { LargerButton } from "../components/ui/button";


function ClassPage() {

  return (
    <Box display="flex" justifyContent="center" sx={{overflow: "hidden", minHeight: "90vh"}} >
        <Stack alignItems="center" paddingTop={{xs: 4, md:8}}>
            <ClassCarousel />
        </Stack>
    </Box>      
  );
}

export default ClassPage;