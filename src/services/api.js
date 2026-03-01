import axios from 'axios';

const API = axios.create({
  baseURL: 'https://public-grievance-backend.onrender.com', // backend URL
});

// Add token to headers if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;



