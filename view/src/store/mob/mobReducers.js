import { createSlice } from "@reduxjs/toolkit";

import slime from "../../utils/mobs/slimes";
import { getRandomSprite } from "../../utils/mobs/funcs";

const mobs = {slime: slime.serialize()};

const initialState = {
  mobState: null,
  hp: null,
  mobSprite: null,
  mobDead: true,
};

const mobSlice = createSlice({
    name: 'mob',
    initialState,
    reducers: {
        spawnMob: (state) => {
            state.mobState = mobs.slime;
            state.hp = mobs.slime.hp;
            state.mobSprite = getRandomSprite(state.mobState);
            state.mobDead = false;
        },
        mobDied: (state) => {
            state.mobState = null;
            state.mobHp = null;
            state.mobSprite = null;
            state.mobDead = true;
        },
    }
});

export default mobSlice.reducer;
export const mobActions = mobSlice.actions;