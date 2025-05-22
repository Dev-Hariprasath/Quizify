import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

export const getAllQuestions = () => axios.get(`${BASE_URL}/questions`);
export const getQuestionById = (id) => axios.get(`http://localhost:8080/api/question/${id}`);
export const getQuestionsByCategory = (category) =>
  axios.get(`${BASE_URL}/question/${category}`);
export const addQuestion = (questionData) =>
  axios.post(`${BASE_URL}/addQuestion`, questionData);
export const updateQuestion = (questionData) =>
  axios.put(`${BASE_URL}/updateQuestion`, questionData);
export const deleteQuestion = (id) =>
  axios.delete(`${BASE_URL}/question/${id}`);
