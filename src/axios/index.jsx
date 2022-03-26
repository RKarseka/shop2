import axios from 'axios';

export const getSneakers = () =>
  axios.get('/sneakers__items').then(({ data }) => data);

export const getCart = () =>
  axios.get('/sneakers__cart').then(({ data }) => data);
