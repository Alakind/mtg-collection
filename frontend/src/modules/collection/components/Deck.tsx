import React from 'react';
import Card from '../../../common/classes/Card';
import CardMedium from './CardMedium';

export interface DeckProps {
    cards: Card[]
}

function Deck({
  cards,
}: DeckProps) {
  return (
    <div className="deck-box">
      <div>
        {cards.map((card) => <CardMedium key={card.id} card={card} />)}
      </div>
    </div>
  );
}

export default Deck;
