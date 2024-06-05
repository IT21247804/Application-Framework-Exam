import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => (
  <div>
    {books.map(book => (
      <div key={book.id}>
        <h2><Link to={`/books/${book.id}`}>{book.title}</Link></h2>
        <p>Author: {book.author}</p>
        <p>Price: ${book.price}</p>
        <p>Availability: {book.available ? 'In Stock' : 'Out of Stock'}</p>
      </div>
    ))}
  </div>
);

export default BookList;
