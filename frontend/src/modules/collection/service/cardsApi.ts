import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const getCards = () => axios
  .get(`${API_URL}cards`, {});

const getDecks = () => axios
  .get(`${API_URL}decks`, {});

const getDeckCards = (deckId: number) => axios
  .get(`${API_URL}decks/${deckId}`, {});

const collectionApi = {
  getCards,
  getDecks,
  getDeckCards,
};

export default collectionApi;
