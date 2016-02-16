import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {FlashcardViewComponent} from './flashcard-view.component';
import {DeckService} from './../services/deck.service';
import {Deck} from './../deck/deck';

@Component({
    selector: 'flashcard-play',
    templateUrl: 'src/flashcard/flashcard-play.html',
    directives: [FlashcardViewComponent]
})

export class FlashcardPlayComponent implements OnInit {
    public deck : Deck = { id: 0, nome: '', cards: [] };

    constructor(
        private __routeParams : RouteParams,
        private __router : Router,
        private __deckService : DeckService
    ) { }

    ngOnInit() {
        let id = +this.__routeParams.get('id')

        this.__deckService.getDeck(id).then(deck => {
            this.deck = deck;
        })
    }

    get diagnose() {
        return JSON.stringify(this.deck)
    }
}