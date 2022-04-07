import React from 'react';
import Card from '../../../common/classes/Card';

export interface CollectionProps {
    cards: Card[]
}

function Collection({
  cards,
}: CollectionProps) {
  return <div>{cards}</div>;
}

export default Collection;
