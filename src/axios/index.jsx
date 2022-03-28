import axios from 'axios';

export const axiosGet = (path) => axios.get(path).then(({ data }) => data);

export const axiosDelId = (path, id) => axios.delete(`${path}/${id}`);

export const axiosPost = (path, item) =>
  axios.post(path, item).then(({ data }) => data.id);
