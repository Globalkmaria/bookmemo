import React from 'react';
import Book from '../Book/Book';

function BookInList({ book, onSaveBook }) {
  return (
    <li className="book">
      <Book book={book} />
      <button className="btn" onClick={(e) => onSaveBook(e, book)}>
        담기
      </button>
    </li>
  );
}

export default BookInList;
