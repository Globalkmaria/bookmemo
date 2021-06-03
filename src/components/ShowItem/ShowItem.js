import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../assets/no-picture.jpg';

function ShowItem({ item }) {
  const {
    date,
    title,
    authors,
    publisher,
    itemTitle,
    publishedDate,
    text,
    thumbnail,
  } = item.data;

  return (
    <div className="show-box">
      <div className="imgbox">
        <img
          src={thumbnail ? thumbnail : noImage}
          alt={thumbnail ? '표지 썸네일' : '썸네일 없음'}
        />
      </div>
      <form>
        <div className="inputs-container">
          <div className="date-box">
            <label htmlFor="date">
              <span>작성일</span>
            </label>
            <input type="text" name="date" id="date" value={date} disabled />
          </div>

          <div className="item-title">
            <input
              type="text"
              name="itemTitle"
              id="itemTitle"
              value={itemTitle}
              disabled
            />
          </div>
          <div className="input-inner">
            <div className="left-box">
              <div className="input-box">
                <label htmlFor="title">
                  <span>책 제목</span>
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  disabled
                />
              </div>
              <div className="input-box">
                <label htmlFor="authors">
                  <span>저자</span>
                </label>
                <input
                  type="text"
                  name="authors"
                  id="authors"
                  value={authors}
                  disabled
                />
              </div>
            </div>
            <div className="right-box">
              <div className="input-box">
                <label htmlFor="publisher">
                  <span>출판사</span>
                </label>
                <input
                  type="text"
                  name="publisher"
                  id="publisher"
                  value={publisher}
                  disabled
                />
              </div>

              <div className="input-box">
                <label htmlFor="publishedDate">
                  <span>출판일</span>
                </label>
                <input
                  type="text"
                  name="publishedDate"
                  id="publishedDate"
                  value={publishedDate}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <textarea
          name="text"
          id="text"
          cols="45"
          rows="10"
          value={text}
          placeholder="기억하고 싶은 내용은..."
          disabled
        ></textarea>
      </form>
      <div className="btn-box">
        <Link
          to={{ pathname: '/edit', state: { book: item.data, id: item.id } }}
        >
          <button className="btn">수정</button>
        </Link>
        <Link to="/items">
          <button className="btn">목록</button>
        </Link>
      </div>
    </div>
  );
}

export default ShowItem;
