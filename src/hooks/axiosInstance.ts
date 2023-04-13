import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../constants';

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export default instance;