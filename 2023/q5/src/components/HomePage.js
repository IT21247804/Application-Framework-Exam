import React, { useState, useEffect } from 'react';
import axios from 'axios'; // for API calls

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:4000/books'); // Replace with your backend URL
      setBooks(response.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to Our Online Bookstore!</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <a href={`/books/${book.id}`}>
              {book.title} - {book.author} (${book.price})
            </a>
            {book.available ? ' (Available)' : ' (Out of Stock)'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
