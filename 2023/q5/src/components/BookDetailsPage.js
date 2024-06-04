import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // for getting book ID
import axios from 'axios';

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/books/${bookId}`);
      setBook(response.data);
    };
    fetchData();
  }, [bookId]);

  if (!book) return <div>Loading book details...</div>;

  const handlePurchase = async () => {
    // Simulate purchase logic (replace with actual payment processing)
    alert('Purchase initiated! (Simulated)');
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p>By {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Price: ${book.price}</p>
      <button onClick={handlePurchase} disabled={!book.available}>
        {book.available ? 'Buy Now' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default BookDetailsPage;
