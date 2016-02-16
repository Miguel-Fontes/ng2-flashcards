import {Component, Input, OnInit} from 'angular2/core';
import {Card} from './../deck/card'

@Component({
    selector: 'flashcard',
    templateUrl: 'src/flashcard/flashcard-view.html'
})

export class FlashcardViewComponent implements OnInit {

    @Input() card : Card;

    public isHidden = true;

    constructor() { }

    ngOnInit() {
        
    }

    exibeDados() {
        this.isHidden = !this.isHidden
    }

}

