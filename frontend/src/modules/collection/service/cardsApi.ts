import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const getCards = () => axios
  .get(`${API_URL}cards`, {});

const collectionApi = {
  getCards,
};

export default collectionApi;
