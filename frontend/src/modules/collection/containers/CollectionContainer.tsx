import React from 'react';
import Card from '../../../common/classes/Card';
import { getCreatureCard1, getCreatureCard2, getInstantCard1 } from '../../../mocks/cards';
import Collection from '../components/Collection';

function CollectionContainer() {
  const card1: Card = getCreatureCard1();
  const card2: Card = getCreatureCard2();
  const card3: Card = getInstantCard1();

  return <Collection cards={[card1, card2, card3]} />;
}

export default CollectionContainer;
