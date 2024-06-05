import React, { useEffect, useState } from 'react';
import { getBooks } from '../api';
import BookList from './BookList';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(response => setBooks(response.data));
  }, []);

  return (
    <div>
      <h1>Available Books</h1>
      <BookList books={books} />
    </div>
  );
};

export default Home;
