import {Component, OnInit} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Router} from 'angular2/router'
import {DeckModel} from './deck.model';
import {DeckService} from './../services/deck.service'

@Component({
    selector: 'deck-create',
    templateUrl: 'src/deck/deck-create.html'
})

export class DeckCreateComponent implements OnInit {

    public deck;

    constructor(
        private __deckService : DeckService,
        private __router: Router
        ) { }

    ngOnInit() {
        this.deck = new DeckModel(0, '', [])
    }

    onSubmit() {
        this.__deckService.add(this.deck)
        this.__router.navigate(['DeckView', {id: this.deck.id}])
    }

    get diagnostic() {
        return JSON.stringify(this.deck);
    }
}