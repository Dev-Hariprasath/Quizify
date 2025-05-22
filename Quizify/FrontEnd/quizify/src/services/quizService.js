import axios from 'axios';

const BASE_URL = '/api';

export const getAllQuizzes = () => axios.get(`${BASE_URL}/allQuizzes`); // 

export const getQuizById = (id) => axios.get(`${BASE_URL}/getQuiz/${id}`);

export const submitQuiz = (id, responses) =>
  axios.post(`${BASE_URL}/submit/${id}`, responses);

export const addQuiz = ({ topic, category, num, difficulty }) =>
  axios.post(`${BASE_URL}/addQuiz`, null, {
    params: { topic, category, num, difficulty },
  });

export const getQuizResult = (id) =>
  axios.get(`${BASE_URL}/quizResult/${id}`); 
