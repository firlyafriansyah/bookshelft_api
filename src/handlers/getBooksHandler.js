const books = require('../data/books');

const getBooksHandler = (request) => {
  const bookData = [];
  const { name, reading, finished } = request.query;

  books.forEach((book) => {
    if (name) {
      if (book.name.toLowerCase().includes(name.toLowerCase())) {
        bookData.push({ id: book.id, name: book.name, publisher: book.publisher });
      }
    } else if (reading) {
      if ((book.reading ? 1 : 0).toString() === reading) {
        bookData.push({ id: book.id, name: book.name, publisher: book.publisher });
      }
    } else if (finished) {
      if ((book.finished ? 1 : 0).toString() === finished) {
        bookData.push({ id: book.id, name: book.name, publisher: book.publisher });
      }
    } else {
      bookData.push({ id: book.id, name: book.name, publisher: book.publisher });
    }
  });

  const response = {
    status: 'success',
    data: {
      books: bookData,
    },
  };
  return response;
};

module.exports = getBooksHandler;
