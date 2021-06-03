import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item';

function ItemList({ items, onDelete }) {
  return (
    <div className="itemList">
      <h2 className="items-title">독서기록</h2>
      <div className="items-container">
        <ul>
          {items &&
            items.data.map((item) => (
              <button className="item-link" key={item.id}>
                <Link to={`/items/:${item.id}`}>
                  <Item item={item} onDelete={onDelete} />
                </Link>
              </button>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ItemList;
