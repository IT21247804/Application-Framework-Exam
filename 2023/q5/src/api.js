import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000';

export const getBooks = () => axios.get(`${API_BASE_URL}/books`);
export const searchBooks = (query) => axios.get(`${API_BASE_URL}/books/search`, { params: query });
export const purchaseBook = (id, paymentInfo) => axios.post(`${API_BASE_URL}/books/purchase/${id}`, { paymentInfo });
