import {Component, OnInit, Input} from 'angular2/core';
import {FlashcardViewComponent} from './flashcard-view.component';
import {Deck} from './../deck/deck';

@Component({
    selector: 'flashcard-play',
    templateUrl: '.src/flashcard/flashcard-play.html',
    directives: [FlashcardViewComponent]
})

export class FlashcardPlayComponent implements OnInit {

    @Input() deck : Deck

    constructor() { }

    ngOnInit() { }
}