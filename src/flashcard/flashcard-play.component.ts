import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {FlashcardViewComponent} from './flashcard-view.component';
import {DeckService} from './../services/deck.service';
import {Deck} from './../deck/deck';
import {Card} from './../deck/card';

@Component({
    selector: 'flashcard-play',
    templateUrl: 'src/flashcard/flashcard-play.html',
    directives: [FlashcardViewComponent]
})

export class FlashcardPlayComponent implements OnInit {
    private deck: Deck = { id: 0, nome: '', cards: [{ frente: '', verso: '' }] };
    private currentFlashcard: Card = { frente: '', verso: '' }
    private queue: Card[] = [];
    private estatisticas: { acertos: number, erros: number } = { acertos: 0, erros: 0 }
    public flagExibeDefinicao: boolean = true;


    constructor(
        private __routeParams: RouteParams,
        private __router: Router,
        private __deckService: DeckService
    ) { }

    ngOnInit(): void {
        let id = +this.__routeParams.get('id')

        this.__deckService.getDeck(id).then(deck => {
            this.deck = deck;

            deck.cards.forEach(card => {
                this.queue.push(card);
            });

            this.currentFlashcard = this.queue.shift();
        })
    }

    public acerto(): void {
        this.estatisticas.acertos++
        this.flagExibeDefinicao = true;
        this.proximo();
    }

    public erro(): void {
        this.estatisticas.erros++
        this.flagExibeDefinicao = true;
        this.proximo();
    }

    private proximo(): void {
        if (this.queue.length !== 0) {
            this.currentFlashcard = this.queue.shift();
        } else {
            // Encerra
            this.__router.navigate(['DeckView', { id: this.deck.id }])
        }
    }

    set exibeDefinicao(value: boolean) {
        this.flagExibeDefinicao = value;
    }

    get exibeDefinicao(): boolean {
        return this.flagExibeDefinicao;
    }

    get currentCard(): Card {
        return this.currentFlashcard;
    }

    get diagnose() {
        return JSON.stringify(this.deck)
    }
}