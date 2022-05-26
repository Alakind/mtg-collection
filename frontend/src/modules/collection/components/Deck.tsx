import React from 'react';
import Card from '../../../common/classes/Card';
import CardMedium from './CardMedium';
import '../styles/decks.css';

export interface DeckProps {
    cards: Card[],
    onAddCard: () => void,
}

function Deck({
  cards,
  onAddCard,
}: DeckProps) {
  return (
    <div className="deck-box">
      {cards.map((card) => <CardMedium key={card.id} card={card} />)}
      <div className="add-card" onClick={onAddCard} aria-hidden="true">
        <div className="add-card-text">
          Add card
        </div>
      </div>
    </div>
  );
}

export default Deck;
