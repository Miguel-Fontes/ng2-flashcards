import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router, RouterOutlet} from 'angular2/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {DeckComponent} from './deck/deck.component';
import {FlashcardComponent} from './flashcard/flashcard.component';


@Component({
    selector: 'app',
    templateUrl: 'src/app.html',
    directives: [RouterOutlet]
})

@RouteConfig([
    {path: '/dashboard/...', name:'Dashboard', component: DashboardComponent, useAsDefault: true},
    {path: '/deck/...', name: 'Deck', component: DeckComponent },
    {path: '/flashcard/...', name: 'Flashcard', component: FlashcardComponent}
])


export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}