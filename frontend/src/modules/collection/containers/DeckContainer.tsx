import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Deck from '../components/Deck';
import collectionApi from '../service/cardsApi';

function DeckContainer() {
  const [cards, setCards] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const deckId = Number(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

  const onAddCard = useCallback(() => {
    navigate(`/decks/add/${deckId}`);
  }, [navigate]);

  useEffect(() => {
    collectionApi.getDeckCards(deckId)
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  return (
    <Deck cards={cards} onAddCard={onAddCard} />
  );
}

export default React.memo(DeckContainer);
