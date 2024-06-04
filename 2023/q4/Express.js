const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory data store
let books = [
  { id: 1, title: "Book One", author: "Author One", genre: "Fiction", price: 10.99, available: true },
  { id: 2, title: "Book Two", author: "Author Two", genre: "Science", price: 12.99, available: true },
  { id: 3, title: "Book Three", author: "Author One", genre: "Fiction", price: 8.99, available: false },
  // Add more books as needed
];

// Middleware for logging requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// a) List all available books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// b) Search for books by title, author, or genre
app.get('/books/search', (req, res) => {
  const { title, author, genre } = req.query;
  let result = books;

  if (title) {
    result = result.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }
  if (author) {
    result = result.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }
  if (genre) {
    result = result.filter(book => book.genre.toLowerCase().includes(genre.toLowerCase()));
  }

  res.status(200).json(result);
});

// c) Purchase a book by ID and process the payment
app.post('/books/purchase/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  if (!book.available) {
    res.status(400).json({ error: 'Book is not available' });
    return;
  }

  // Simulate payment processing
  const { paymentInfo } = req.body;
  if (!paymentInfo || !paymentInfo.cardNumber || !paymentInfo.amount) {
    res.status(400).json({ error: 'Invalid payment information' });
    return;
  }

  // Simulate a successful payment
  book.available = false; // Mark the book as sold
  res.status(200).json({ message: 'Purchase successful', book });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
