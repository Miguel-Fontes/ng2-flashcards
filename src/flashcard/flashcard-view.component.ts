import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {Card} from './../deck/card';

@Component({
    selector: 'flashcard',
    templateUrl: 'src/flashcard/flashcard-view.html'
})

export class FlashcardViewComponent implements OnInit {

    @Input() card: Card;
    @Input() isHidden: boolean;
    @Output() visibility: EventEmitter<any> = new EventEmitter()


    constructor( ) { }

    ngOnInit() {
        this.isHidden = typeof this.isHidden == 'undefined'
            ? true
            : this.isHidden;
    }

    exibeDados() : void {
        this.isHidden = !this.isHidden;
        this.visibility.emit(this.isHidden)
    }

}

