import {Component, OnInit} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {DashboardMainComponent} from './dashboard-main.component';
import {DeckComponent} from './../deck/deck.component';

import {DeckService} from './../services/deck.service';


@Component({
    templateUrl: 'src/dashboard/dashboard.html',
    directives: [RouterOutlet],
    providers: [DeckService]
})

@RouteConfig([
    { path: '/', name: 'Dashboard', component: DashboardMainComponent, useAsDefault: true }
])

export class DashboardComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}