import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';

import {FlashcardPlayComponent} from './flashcard-play.component';
import {DeckService} from './../services/deck.service';

@Component({
    selector: 'flashcard',
    templateUrl: 'src/flashcard/flashcard.html',
    directives: [RouterOutlet],
    providers: [DeckService]
})

@RouteConfig([
    { path: '/', name: 'FlashcardPlay', component: FlashcardPlayComponent, useAsDefault: true },
    { path: '/:id', name: 'FlashcardPlay', component: FlashcardPlayComponent }
])

export class FlashcardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}