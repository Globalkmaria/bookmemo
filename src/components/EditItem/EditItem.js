import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import noImage from '../../assets/no-picture.jpg';
import { saveItem } from '../../modules/items';
import today from '../../utils/today';
export function Popinfo() {
  return (
    <div className="pop">
      <div className="pop-inner">
        <span>저장이 완료되었습니다!</span>
        <span>어디로 이동하시겠습니까?</span>
        <Link to="/">
          <button className="btn home">홈</button>
        </Link>
        <Link to="/items">
          <button className="btn">독서 기록</button>
        </Link>
      </div>
    </div>
  );
}
function EditItem({ book, id }) {
  const dispatch = useDispatch();
  const [finished, setFinished] = useState(false);
  const todaydate = today();
  const { title, thumbnail, authors, publisher } = book;
  const itemTitle = book.itemTitle ? book.itemTitle : '';
  const publishedDate = book.publishedDate
    ? book.publishedDate
    : book.datetime.slice(0, 10);
  const text = book.text ? book.text : '';
  const [input, setInput] = useState({
    itemTitle: itemTitle,
    date: todaydate,
    title: title,
    authors: authors,
    publisher: publisher,
    publishedDate: publishedDate,
    text: text,
    thumbnail: thumbnail,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const editedTime = Date.now();
    dispatch(saveItem({ id: id, data: { ...input }, editedTime: editedTime }));
    setFinished(true);
  };
  return (
    <>
      {finished && <Popinfo />}
      <div className="edit-box">
        <div className="imgbox">
          <img
            src={thumbnail ? thumbnail : noImage}
            alt={thumbnail ? '표지 썸네일' : '썸네일 없음'}
          />
        </div>
        <form action="submit" onSubmit={onSubmit}>
          <div className="inputs-container">
            <div className="date-box">
              <label htmlFor="date">
                <span>작성일</span>
              </label>
              <input
                type="text"
                name="date"
                id="date"
                value={input.date}
                onChange={onChange}
              />
            </div>

            <div className="item-title">
              <input
                type="text"
                name="itemTitle"
                id="itemTitle"
                value={input.itemTitle}
                onChange={onChange}
                placeholder="제목을 입력하세요"
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
                    value={input.title}
                    onChange={onChange}
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
                    value={input.authors}
                    onChange={onChange}
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
                    value={input.publisher}
                    onChange={onChange}
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
                    value={input.publishedDate}
                    onChange={onChange}
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
            onChange={onChange}
            value={input.text}
            placeholder="기억하고 싶은 내용은..."
          ></textarea>
        </form>

        <button type="submit" className="btn" onClick={onSubmit}>
          저장
        </button>
      </div>
    </>
  );
}

export default EditItem;
