import React from 'react';
import { useSelector } from 'react-redux';
import ShowItem from '../components/ShowItem';

function ItemContainer({ postId }) {
  const { data } = useSelector((state) => state.items);
  const item = data.find((post) => post.id == postId);
  return (
    <>
      <ShowItem item={item} />
    </>
  );
}
export default ItemContainer;
