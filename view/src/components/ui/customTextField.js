import { TextField, InputLabel, InputBase, FormControl } from "@mui/material";
import styled from "styled-components";

export const CustomTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #FFFFFF;
    }
    &:hover:not(.Mui-focused) fieldset {
      border-color: #00a86b; 
    }
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: #00a86b; 
  }

  & .MuiFormLabel-root {
    color: #FFFFFF;
  }

  & .MuiInputBase-input {
    color: #FFFFFF;
  }

  
`;