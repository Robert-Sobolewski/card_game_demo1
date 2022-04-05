import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Game, { ICard } from "../Game";

export enum Team {
  RED = 0,
  BLUE,
}

export interface IGameRoot {
  game: IGameReducer;
}
export interface IGameReducer {
  game: Game | null;
  score: number;
  team: Team | null;
  cards: ICard[];
  move: null | any;
}
const init: IGameReducer = {
  game: null,
  score: 0,
  team: null,
  cards: [],
  move: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState: init,
  reducers: {
    setGame: (state, action: PayloadAction<Game>) => {
      state.game = action.payload;
    },
    selectTeam: (state: IGameReducer, action: PayloadAction<Team>) => {
      state.team = action.payload;
    },
    gameInit: (state: IGameReducer) => {
      state.game = new Game();
      state.game.generateDeck();
    },
  },
});

export default gameSlice.reducer;
export const { selectTeam, gameInit, setGame } = gameSlice.actions;
export const selectGame = (state: IGameRoot) => state.game;
