import React from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri';

function Item({ item, onDelete }) {
  const { itemTitle, date, title, editedTime } = item.data;
  return (
    <li className="item-container">
      <span className="cancel-icon" onClick={(e) => onDelete(e, item.id)}>
        <RiDeleteBin7Line />
      </span>
      <h2>{itemTitle}</h2>
      <span className="itemTitle">{title}</span>
      <span className="editedTime">마지막 수정일 : {editedTime}</span>
      <span className="date">최초 작성일 : {date}</span>
    </li>
  );
}

export default Item;
