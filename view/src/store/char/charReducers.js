import { createSlice } from "@reduxjs/toolkit";
import { CharacterModel } from "../../utils/char";

const initialState = {
  name: null,
  character: null
};

const charSlice = createSlice({
    name: 'char',
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
        setActiveClass: (state, action) => {
          if (state.character && action.payload) {
            state.character.activeClass = action.payload;
          }
        },
        addXP: (state, action) => {
          if (state.character && action.payload) {
            state.character.classes[state.character.activeClass].addXP(action.payload);
          }
        },
    }
});

export default charSlice.reducer;
export const charActions = charSlice.actions;