import axios from 'axios';
import Card from '../../../common/classes/Card';

const API_URL = 'http://localhost:8080/';

// const config: AxiosRequestConfig = {
//   headers: {
//     Authorization: '',
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   },
// };

const getCards = () => axios
  .get(`${API_URL}cards`, {});

const getDecks = () => axios
  .get(`${API_URL}decks`, {});

const getDeckCards = (deckId: number) => axios
  .get(`${API_URL}decks/${deckId}`, {});

const addCardToDeck = (cardId: number, deckId: number) => axios
  .post(`${API_URL}decks/${deckId}/card/${cardId}`);

const addCard = (card: Card) => axios
  .post(`${API_URL}/cards`, card);

const collectionApi = {
  getCards,
  getDecks,
  getDeckCards,
  addCardToDeck,
  addCard,
};

export default collectionApi;
