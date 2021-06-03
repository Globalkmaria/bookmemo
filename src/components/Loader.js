import React from 'react';
import { useSelector } from 'react-redux';

function Loader() {
  const { data, loading } = useSelector((state) => state.books);
  let visual;
  if (data && data.length && loading) {
    visual = true;
  }
  return <>{visual && <p>로딩중 입니다.</p>}</>;
}

export default Loader;
