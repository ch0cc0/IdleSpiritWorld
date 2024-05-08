import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  character: null
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        newChar: (state) => {
          state.character = new CharacterModel();
        },
        name: (state, action) => {
          state.name = action.payload;
        },
        loadChar: (state, action) => {
          try {
            if (!action.payload || !action.payload.character) {
              throw new Error('Invalid payload');
            }
            state.name = action.payload.name;
            state.character = action.payload.character;
          } catch (error) {
            console.error('Error loading save state:', error.message);
          }
        
        },
        clearState: (state) => {
          state.name = initialState.name;
          state.character = initialState.character;
          console.log('Clearing state');
        },
    }
});

export default skillsSlice.reducer;
export const skillsActions = skillsSlice.actions;