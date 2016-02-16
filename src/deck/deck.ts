import {Card} from './card'

export interface Deck {
    id: number,
    nome: string,
    cards: Card[]
}