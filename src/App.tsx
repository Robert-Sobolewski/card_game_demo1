import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import Game, { IGame } from './components/Game'
import { ICard } from './components/Game';
import Card from "./components/card/Card";

function App() {
  const [game, setGame] = useState<IGame| null>(null)

  useEffect(() =>{
    
    let g = new Game();
    g.generateDeck();
    setGame(g)
  },[])
  return (
    <div className="App">
      <h1>game</h1>
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
      <Card figure={game!.red[0]} />
    </div>
  );
}

export default App
