import axios from "axios";
import data from './data.json'


export interface ICard{
    id:number,
    name: string,
    pictures: string[],
    hit: number,
}
export interface IGame{
    red: ICard[],
    blue: ICard[],
    generateDeck(): void
}

export class Game implements IGame {
    public red: ICard[] =[]
    public blue: ICard[] = []
    private deck: ICard[] = [];

    generateDeck =()=>{
        let deck =data.sort((a,b)=> Math.random()-0.5);
        this.red =[...data].slice(0,25);
        deck =data.sort((a,b)=> Math.random()-0.5);
        this.blue =[...data].slice(0,25);
    }

}


export default Game;