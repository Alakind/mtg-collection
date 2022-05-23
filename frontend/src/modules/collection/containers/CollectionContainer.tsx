import React, { useEffect, useState } from 'react';
import Collection from '../components/Collection';
import collectionApi from '../service/cardsApi';

function CollectionContainer() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    collectionApi.getCards()
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  return <Collection cards={cards} />;
}

export default CollectionContainer;
