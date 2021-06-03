import React from 'react';
import ItemContainer from '../container/ItemContainer';

function Item({ match }) {
  const id = match.params.id.slice(1);
  return (
    <section className="item-page">
      <ItemContainer postId={id} />
    </section>
  );
}

export default Item;
