import {FlashcardPlayComponent} from './flashcard-play.component';

import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet, Router} from 'angular2/router';

@Component({
    selector: 'flashcard',
    templateUrl: 'src/flashcard/flashcard.component.html',
    directives: [RouterOutlet]
})

@RouteConfig([
    { path: '/:id', name: 'FlashPlay', component: FlashcardPlayComponent},
])

export class FlashcardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}