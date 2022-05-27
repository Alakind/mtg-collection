import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Collection from '../components/Collection';
import collectionApi from '../service/cardsApi';

function CollectionContainer() {
  const [cards, setCards] = useState([]);

  const navigate = useNavigate();

  const onCreateCard = useCallback(() => {
    navigate('/card/new');
  }, []);

  useEffect(() => {
    collectionApi.getCards()
      .then((response) => {
        setCards(response.data);
      });
  }, []);

  return <Collection cards={cards} onCreateCard={onCreateCard} />;
}

export default React.memo(CollectionContainer);
