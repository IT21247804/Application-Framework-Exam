import React, { useState } from 'react';
import { searchBooks } from '../api';
import BookList from './BookList';

const Search = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchBooks({ q: query }).then(response => setBooks(response.data));
  };

  return (
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search by title, author, or genre" 
        />
        <button type="submit">Search</button>
      </form>
      <BookList books={books} />
    </div>
  );
};

export default Search;

