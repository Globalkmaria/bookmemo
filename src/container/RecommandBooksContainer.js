import React from 'react';
import BookList from '../components/BookList/BookList';
import SaveBar from '../components/SaveBar';
import './MainElement.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, resetSaveBook, saveBook } from '../modules/savebooks';
import { recommandBookData } from '../api/Id';

function RecommandBooksContainer() {
  const data = recommandBookData;
  const dispatch = useDispatch();
  const onSaveBook = (e, book) => {
    e.preventDefault();
    dispatch(saveBook(book));
  };

  // SaveBar관련
  const savebooks = useSelector((state) => state.savebooks);
  const sendSavebook = savebooks.length > 7 ? savebooks.slice(-7) : savebooks;
  const onReset = () => {
    dispatch(resetSaveBook());
  };
  const onDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="showSearchBooks">
      <BookList data={data} onSaveBook={onSaveBook} />
      <SaveBar savebooks={sendSavebook} onReset={onReset} onDelete={onDelete} />
    </div>
  );
}

export default RecommandBooksContainer;
