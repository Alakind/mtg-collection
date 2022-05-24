import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Deck from '../components/Deck';
import collectionApi from '../service/cardsApi';

function DeckContainer() {
  const [cards, setCards] = useState([]);

  const location = useLocation();

  const deckId = Number(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

  useEffect(() => {
    collectionApi.getDeckCards(deckId)
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  return (
    <Deck cards={cards} />
  );
}

export default DeckContainer;
