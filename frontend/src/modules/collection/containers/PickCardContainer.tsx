import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PickCard from '../components/PickCard';
import collectionApi from '../service/cardsApi';

function PickCardContainer() {
  const [cards, setCards] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const deckId = Number(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));

  const onPick = useCallback((cardId) => {
    collectionApi.addCardToDeck(cardId, deckId).then().catch();
    navigate(`/decks/${deckId}`);
  }, []);

  useEffect(() => {
    collectionApi.getCards()
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  return <PickCard cards={cards} onPick={onPick} />;
}

export default React.memo(PickCardContainer);
