const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3020;

// Middleware
app.use(cors()); // Allow requests from Angular frontend
app.use(bodyParser.json());

// Initial book data
let books = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Vue' },
    { id: 4, name: 'NodeJS' },
    { id: 5, name: 'Django' }
];

// GET all books
app.get('/bookList', (req, res) => {
    res.json(books);
});

// POST add a book
app.post('/addBook', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT update a book
app.put('/update', (req, res) => {
    const updatedBook = req.body;
    const index = books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
        books[index] = updatedBook;
        res.json(updatedBook);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// DELETE a book
app.delete('/book/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === bookId);
    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook[0]);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
