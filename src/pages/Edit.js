import React from 'react';
import { useSelector } from 'react-redux';
import EditItem from '../components/EditItem/EditItem';
import './pages.scss';

function Edit(props) {
  const items = useSelector((state) => state.items);
  let nextId;
  if (items.data) {
    const data = items.data.map((item) => item.id);
    nextId = Math.max(...data) + 1;
  } else {
    nextId = 1;
  }
  const { book } = props.location.state;
  const id = props.location.state.id ? props.location.state.id : nextId;
  return (
    <section className="edit-page">
      <EditItem book={book} id={id} />
    </section>
  );
}

export default Edit;
