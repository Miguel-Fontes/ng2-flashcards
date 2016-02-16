import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';

import {DeckService} from './../services/deck.service'

import {DeckViewComponent} from './deck-view.component';
import {DeckListComponent} from './deck-list.component';
import {DeckCreateComponent} from './deck-create.component';
import {DeckCardsComponent} from './deck-cards.component';
import {FlashcardPlayComponent} from './../flashcard/flashcard-play.component';

@Component({
    selector: 'deck',
    templateUrl: 'src/deck/deck-component.html',
    directives: [RouterOutlet],
    providers: [DeckService]
})

@RouteConfig([
    { path: '/', name: 'DeckList', component: DeckListComponent, useAsDefault: true},
    { path: '/:id', name: 'DeckView', component: DeckViewComponent },
    { path: '/novo', name: 'DeckCreate', component: DeckCreateComponent },
    { path: '/cards/:id', name: 'DeckCards', component: DeckCardsComponent },
    { path: '/play/:id', name: 'DeckPlay', component: FlashcardPlayComponent },
])

export class DeckComponent implements OnInit {

    constructor(private __router : Router) { }

    ngOnInit() { }

    novoDeck() {
        this.__router.navigate(['DeckCreate']);
    }

    listar() {
        this.__router.navigate(['DeckList']);
    }
}