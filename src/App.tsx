import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Game, { IGame } from './components/Game'
import { ICard } from './components/Game';
import Card from "./components/card/Card";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GamePage from "./pages/GamePage";
import NotFound from "./pages/NotFound";
import SelectTeam from "./pages/SelectTeam";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gameInit } from "./components/redux/gameSlice";

function App() {
  const [game, setGame] = useState<IGame | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    // let g = new Game();
    // g.generateDeck();
    // setGame(g);
    dispatch(gameInit());
  }, []);
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/selectTeam" element={<SelectTeam />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </Container>
      {/* <h1>game</h1>
      <ul className="blue">
        {game?.blue.map((i: ICard) => (
          <li key={i.id}>
            <strong>{i.name}</strong> - id: {i.id} --- DMG: {i.hit}
          </li>
        ))}
      </ul>
      <ul className="red">
        {game?.red.map((i: ICard) => (
          <li key={i.id}>
            <strong>{i.name}</strong> - id: {i.id} --- DMG: {i.hit}
          </li>
        ))}
      </ul>
      <Card figure={game!.red[0]} /> */}
    </div>
  );
}

export default App
