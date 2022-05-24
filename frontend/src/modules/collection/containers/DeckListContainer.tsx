import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  const handleOpenDeck = ((deckId: number) => {
    navigate(`/decks/${deckId}`);
  });

  return <DeckList onOpenDeck={handleOpenDeck} decks={decks} />;
}

export default DeckListContainer;
