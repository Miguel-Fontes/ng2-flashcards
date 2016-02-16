import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {Card} from './card';
import {Deck} from './deck';
import {DeckService} from './../services/deck.service';

@Component({
    selector: 'flashcards-form',
    templateUrl: 'src/deck/deck-cards.html'
})

export class DeckCardsComponent implements OnInit {

    public cards: Card[] = [{ frente: '', verso: '' }];
    public deck: Deck;

    constructor(
        private __deckService: DeckService,
        private __routeParams: RouteParams,
        private __router : Router
    ) { }

    ngOnInit() {
        let deckId = +this.__routeParams.get('id');
        this.__deckService.getDeck(deckId).then(data => { this.deck = data })
    }

    adicionaLinha(event) {
        if (event && event.keyCode === 9) {
            console.log(event || 'none')
            this.cards.push({ frente: '', verso: '' })
        } else if (!event) {
            this.cards.push({ frente: '', verso: '' })
        }
    }

    onSubmit() {
        this.cards = this.cards.filter(value => {
            return (value.frente !== '' && value.verso !== '')
        })
        this.deck.cards = this.deck.cards.concat(this.cards)

        this.__deckService.update(this.deck)

        this.__router.navigate(['DeckView', {id: this.deck.id}])
    }

}