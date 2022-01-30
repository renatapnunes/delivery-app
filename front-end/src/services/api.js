import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const http = {
  findUser: async ({ email, password }) => {
    try {
      const response = await api.post('/login', { email, password });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  createUser: async ({ name, email, password }) => {
    try {
      const response = await api.post('/register', { name, email, password });
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  getAllProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
  sales: async () => {
    try {
      const response = await api.get('/sales');
      return response.data;
    } catch (error) {
      return error.response.status;
    }
  },
};

export default http;
