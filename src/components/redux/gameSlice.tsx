import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICard } from "../Game";

export enum Team {
  RED = 0,
  BLUE,
}

export interface IGameRoot {
  game: IGameReducer;
}
interface IGameReducer {
  score: number;
  team: Team | null;
  cards: ICard[];
  move: null | any;
}
const init: IGameReducer = {
  score: 0,
  team: null,
  cards: [],
  move: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState: init,
  reducers: {
    selectTeam: (state: IGameReducer, action: PayloadAction<Team>) => {
      state.team = action.payload;
    },
  },
});

export default gameSlice.reducer;
export const { selectTeam } = gameSlice.actions;
export const selectGame = (state: IGameRoot) => state.game;
