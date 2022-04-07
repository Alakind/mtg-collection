import React from 'react';
import Card from '../../../common/classes/Card';

export interface CardMediumProps {
    card: Card
}

function CardMedium({
  card,
}: CardMediumProps) {
  return <div>{card.id}</div>;
}

export default CardMedium;
