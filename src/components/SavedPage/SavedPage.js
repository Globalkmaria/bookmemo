import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import SavedBook from '../SavedBook';

function SavedPage({ savebooks, onDelete }) {
  return (
    <div className="savedbook-wrapper">
      <button className="link-container">
        <Link to="/">더 검색하기</Link>
      </button>
      <ul className="savedbook">
        {savebooks.map((book) => (
          <SavedBook key={uuidv4()} book={book} onDelete={onDelete} />
        ))}
      </ul>
      {savebooks.length === 0 && (
        <div className="info">저장한 책이 없습니다.</div>
      )}
    </div>
  );
}

export default SavedPage;
