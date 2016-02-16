import {Deck} from './deck';
import {Card} from './card';

export class DeckModel implements Deck {

    constructor(
        public id: number,
        public nome: string,
        public cards: Card[]) {
            
    }

}