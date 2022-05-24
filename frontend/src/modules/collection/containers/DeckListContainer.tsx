import React, { useEffect, useState } from 'react';
import DeckList from '../components/DeckList';
import collectionApi from '../service/cardsApi';

function DeckListContainer() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    collectionApi.getDecks()
      .then((response) => {
        setDecks(response.data);
      });
  }, []);

  return <DeckList decks={decks} />;
}

export default DeckListContainer;
