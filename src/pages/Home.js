import React from 'react';
import SearchContainer from '../container/SearchContainer';
import ShowSearchContainer from '../container/ShowSearchContainer';
import useInfiniteScroll from '../hook/useInfiniteScroll';
import { fetchBookList } from '../modules/books';
import { useSelector } from 'react-redux';
import './pages.scss';
function Home() {
  const { query, data } = useSelector((state) => state.books);
  useInfiniteScroll(query, fetchBookList);
  return (
    <section className="home">
      <SearchContainer content_undersearch={data ? true : false} />
      {data && <ShowSearchContainer />}
    </section>
  );
}

export default Home;
