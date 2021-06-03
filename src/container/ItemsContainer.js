import React from 'react';
import ItemList from '../components/ItemsList/ItemList';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../modules/items';
function ItemsContainer() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const onDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteItem(id));
  };
  return (
    <>
      <ItemList items={items} onDelete={onDelete} />
    </>
  );
}

export default ItemsContainer;
