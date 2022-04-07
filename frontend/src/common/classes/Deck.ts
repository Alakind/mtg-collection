import Card from './Card';

export default class Deck {
  deckId: number;

  cards: Array<Card> = [];

  constructor(deckId: number) {
    this.deckId = deckId;
  }
}
