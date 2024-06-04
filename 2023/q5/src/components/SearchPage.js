import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // for navigation

const SearchPage = () => {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/books/search?q=${searchTerm}`); // Redirect with search query
  };

  return (
    <div>
      <h1>Search Books</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
