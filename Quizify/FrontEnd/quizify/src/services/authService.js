import axios from 'axios';

export const loginUser = (credentials) => {
  return axios.post('http://localhost:8080/api/login', credentials);
};

export const signupUser = (userData) => {
  return axios.post('http://localhost:8080/api/signup', userData);
};