import React from 'react';
import noImage from '../../assets/no-picture.jpg';
import { v4 as uuidv4 } from 'uuid';
// import './SaveBar.scss';
import { GiCancel } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function SavedBookItem({ savedbook, onDelete }) {
  const { title, thumbnail, url, id } = savedbook;
  const shortTitle = title.length > 11 ? title.slice(0, 15) + '...' : title;
  return (
    <li className="savedBook">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="savedBook-img">
          <img src={thumbnail ? thumbnail : noImage} alt={title} />
        </div>
      </a>
      <span className="cancel-icon" onClick={() => onDelete(id)}>
        <GiCancel />
      </span>
      <span className="title">{shortTitle}</span>
    </li>
  );
}

function SaveBar({ savebooks, onReset, onDelete }) {
  return (
    <nav className="savebar">
      <ul>
        {savebooks &&
          savebooks.map((savedbook) => (
            <SavedBookItem
              key={uuidv4()}
              savedbook={savedbook}
              onDelete={onDelete}
            />
          ))}
      </ul>
      <button className="btn" onClick={onReset}>
        비우기
      </button>
      <Link to="/savedBooks">
        <button className="btn">
          저장한 <br />책 목록 열기
        </button>
      </Link>
    </nav>
  );
}

export default SaveBar;
