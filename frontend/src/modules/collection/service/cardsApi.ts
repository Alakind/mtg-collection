import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const getCards = () => axios
  .get(`${API_URL}cards`, {});

const getDecks = () => axios
  .get(`${API_URL}decks`, {});

const collectionApi = {
  getCards,
  getDecks,
};

export default collectionApi;
