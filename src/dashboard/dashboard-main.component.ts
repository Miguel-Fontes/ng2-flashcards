import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'dashboard',
    templateUrl: 'src/dashboard/dashboard-main.html',
    directives: [ROUTER_DIRECTIVES]
})

export class DashboardMainComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

}

