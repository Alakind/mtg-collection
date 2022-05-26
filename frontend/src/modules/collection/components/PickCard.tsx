import React from 'react';
import Card from '../../../common/classes/Card';
import CardMedium from './CardMedium';
import '../styles/collection.css';

export interface PickCardProps {
    cards: Card[],
    // eslint-disable-next-line
    onPick: (cardId: number) => void,
}

function PickCard({
  cards,
  onPick,
}: PickCardProps) {
  return (
    <>
      <div className="instruction">Pick a card to add</div>
      <div className="collection-box">
        {cards.map((card) => (
          <div onClick={() => { onPick(card.id); }} key={card.id} className="to-pick" aria-hidden="true">
            <CardMedium card={card} />
          </div>
        ))}
      </div>
    </>
  );
}

export default PickCard;
