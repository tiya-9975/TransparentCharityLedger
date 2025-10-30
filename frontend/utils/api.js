import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getNGOs = () => API.get('/ngos');
export const donateToNGO = (id, amount) => API.post(`/donate/${id}`, { amount });
export const getDonations = () => API.get('/donations');
