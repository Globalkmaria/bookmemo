import React from 'react';
import { useDispatch } from 'react-redux';
import Search from '../components/Search';
import { fetchBookList } from '../modules/books';
import { useSelector } from 'react-redux';

function SearchContainer() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.books);
  const getbooks = (query) => {
    dispatch(fetchBookList(query));
  };

  return (
    <>
      <Search getbooks={getbooks} loading={loading} data={data} />
    </>
  );
}

export default SearchContainer;
