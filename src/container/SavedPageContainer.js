import React from 'react';
import SavedPage from '../components/SavedPage/SavedPage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../modules/savebooks';

function SavedBookPage() {
  const savebooks = useSelector((state) => state.savebooks);
  const dispatch = useDispatch();
  const onDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteBook(id));
  };
  return (
    <>
      <SavedPage savebooks={savebooks} onDelete={onDelete} />
    </>
  );
}

export default SavedBookPage;
