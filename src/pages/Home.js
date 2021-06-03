import React from 'react';
import SearchContainer from '../container/SearchContainer';
import ShowSearchContainer from '../container/ShowSearchContainer';
import useInfiniteScroll from '../hook/useInfiniteScroll';
import { fetchBookList } from '../modules/books';
import { useSelector } from 'react-redux';

function Home() {
  const { query, data } = useSelector((state) => state.books);
  useInfiniteScroll(query, fetchBookList);
  return (
    <section className="section">
      <SearchContainer />
      {data && <ShowSearchContainer />}
    </section>
  );
}

export default Home;
