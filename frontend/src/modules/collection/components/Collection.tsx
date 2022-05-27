import React from 'react';
import Card from '../../../common/classes/Card';
import CardMedium from './CardMedium';
import '../styles/collection.css';

export interface CollectionProps {
    cards: Card[],
    onCreateCard: () => void,
}

function Collection({
  cards,
  onCreateCard,
}: CollectionProps) {
  return (
    <div className="collection-box">
      {cards.map((card) => (
        <CardMedium key={card.id} card={card} />
      ))}
      <div className="add-card" onClick={onCreateCard} aria-hidden="true">
        <div className="add-card-text">
          New card
        </div>
      </div>
    </div>
  );
}

export default Collection;
