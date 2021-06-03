import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../Book/Book';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { getLocalToken } from '../../modules/login';

function SavedBook({ book, onDelete }) {
  const [token, setToken] = useState('');
  const [click, setClick] = useState(false);
  useEffect(() => {
    const token = getLocalToken();
    if (token) {
      setToken(true);
    }
  }, []);
  const onPop = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 500);
  };
  return (
    <li className="book">
      <span className="cancel-icon" onClick={(e) => onDelete(e, book.id)}>
        <RiDeleteBin7Line />
      </span>
      <Book book={book} />
      {token && (
        <button className="btn">
          <Link to={{ pathname: '/edit', state: { book: book } }}>
            독서 노트 작성
          </Link>
        </button>
      )}
      {token || (
        <>
          <button className="btn" onClick={onPop}>
            독서 노트 작성
          </button>
        </>
      )}
      {click && <span>로그인 시 이용 가능한 서비스입니다</span>}
    </li>
  );
}

export default SavedBook;
