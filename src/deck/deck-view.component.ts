import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Deck} from './deck';
import {DeckService} from './../services/deck.service';
import {FlashcardViewComponent} from './../flashcard/flashcard-view.component'

@Component({
    selector: 'deck-view',
    templateUrl: 'src/deck/deck-view.html',
    styleUrls: ['src/deck/deck.css', 'src/deck/objects.css'],
    directives: [FlashcardViewComponent]
})

export class DeckViewComponent implements OnInit {

    public deck: Deck;

    constructor(
        private __routeParams: RouteParams,
        private __router: Router,
        private __deckService: DeckService) {

        let deckId = +this.__routeParams.get('id');
        this.__deckService.getDeck(deckId).then(data => { this.deck = data })
    }

    ngOnInit() {

    }

    adicionaCards() {
        this.__router.navigate(['DeckCards', { id: this.deck.id }]);
    }

    recallCards() {
        this.__router.navigate(['DeckPlay', { id: this.deck.id }]);
    }
}