import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/books/:id" element={<BookDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
  </Router>
);

export default App;

