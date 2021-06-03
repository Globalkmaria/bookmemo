import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BookList.scss';
import Loader from '../Loader';
import BookInList from '../BookInList';

const info = (text) => <div className="info">{text}</div>;

function BookList({ error, data, onSaveBook }) {
  if (error) return info('에러 발생');
  if (!data.length) return info('검색 결과가 없습니다.');
  return (
    <div className="bookList-wrapper">
      <ul className="bookList">
        {data.map((book) => (
          <BookInList key={uuidv4()} book={book} onSaveBook={onSaveBook} />
        ))}
      </ul>
      <Loader />
    </div>
  );
}

export default BookList;
