import axios from 'axios';

const newRequest = axios.create({
  baseURL: 'http://localhost:5173/',
  withCredentials: true,
});

export default newRequest;
