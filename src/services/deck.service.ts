import {DecksMock} from './deck.mock'
import {Injectable} from 'angular2/core';

@Injectable()
export class DeckService {

    private decks = DecksMock;

    constructor() { }

    getDecks() {
        return Promise.resolve(this.decks)
    }

    getDeck(id) {
        let deck = this.decks.filter(deck => {
            return deck.id === id
        })

        return Promise.resolve(deck[0])
    }

    add(deck) {
        this.decks.push(deck)
    }

    update(deck) {
        this.decks = this.decks.filter(value => {
            return value.nome !== deck.nome
        })
        this.decks.push(deck)
    }

}