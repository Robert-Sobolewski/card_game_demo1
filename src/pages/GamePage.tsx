import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import Game, { ICard, IGame } from "../components/Game";
import {
  gameInit,
  IGameReducer,
  selectGame,
  Team,
} from "../components/redux/gameSlice";
import "./GamePage.scss";

const GamePage = () => {
  const gameInfo = useSelector(selectGame);
  const [game, setGame] = useState<IGameReducer | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gameInit());
  }, []);
  useEffect(() => {
    // let g = new Game();
    // g.generateDeck();
    setGame(gameInfo);
  }, [gameInfo]);
  return (
    <Fragment>
      <div className="game-page">
        <h1>game page </h1>
        <small>{Team[game?.team]}</small>
        <div className={game?.team == 0 ? "table blue" : "table red"}>
          {game?.game[game?.team == 0 ? "blue" : "red"]
            .slice(0, 5)
            .map((item: ICard, index: number) => (
              <Card key={index} figure={item} />
            ))}
        </div>
        <div className={game?.team == 1 ? "table blue" : "table red"}>
          {game?.game[game?.team == 1 ? "blue" : "red"]
            .slice(0, 5)
            .map((item: ICard, index: number) => (
              <Card key={index} figure={item} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default GamePage;
