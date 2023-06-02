import axios from 'axios';

const newRequest = axios.create({
  baseURl: 'http://localhost:8800/api/',
  withCredentials: true,
});

export default newRequest;
