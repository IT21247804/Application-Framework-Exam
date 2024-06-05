import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBooks, purchaseBook } from '../api';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getBooks().then(response => {
      const foundBook = response.data.find(b => b.id === parseInt(id));
      setBook(foundBook);
    });
  }, [id]);

  const handlePurchase = () => {
    const paymentInfo = { cardNumber: '1234-5678-9876-5432', amount: book.price };
    purchaseBook(id, paymentInfo).then(response => {
      setMessage(response.data.message);
    }).catch(error => {
      setMessage(error.response.data.error);
    });
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Price: ${book.price}</p>
      <p>Availability: {book.available ? 'In Stock' : 'Out of Stock'}</p>
      {book.available && <button onClick={handlePurchase}>Purchase</button>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookDetails;
