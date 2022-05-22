import React from 'react';
import Card from '../../../common/classes/Card';
import CardMedium from './CardMedium';
import '../styles/collection.css';

export interface CollectionProps {
    cards: Card[]
}

function Collection({
  cards,
}: CollectionProps) {
  return (
    <div className="collection-box">
      {cards.map((card) => (
        <CardMedium key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Collection;
