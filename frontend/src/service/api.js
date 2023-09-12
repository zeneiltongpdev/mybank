import axios from 'axios';

//export default axios.create({
const server = axios.create({
   baseURL: 'http://localhost:3000/',
   timeout: 10000,
});

export default server;