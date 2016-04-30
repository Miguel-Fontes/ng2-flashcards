import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router'
import {DeckService} from './../services/deck.service'
import {Deck} from './deck'

@Component({
    selector: 'deck-list',
    templateUrl: 'src/deck/deck-list.html',
    styleUrls: ['src/deck/deck.css', 'src/deck/objects.css']
})

export class DeckListComponent implements OnInit {

    public decks: Deck[] = [];

    constructor(
        private __deckService : DeckService,
        private __router : Router) {

    }

    ngOnInit() {
        this.__deckService.getDecks().then(data => { this.decks = data; })
    }

    verDeck(deck) {
        this.__router.navigate(['DeckView', {id: deck.id}])
    }
}
