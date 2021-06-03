import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Search({ getbooks, loading, data }) {
  const [input, setInput] = useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    if (input === '') return;
    e.preventDefault();
    getbooks(input);
    setInput('');
  };
  return (
    <>
      <div className="search-input">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={input}
            onChange={onChange}
            placeholder="책제목을 입력하세요"
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </form>
      </div>
      {loading && !data && <div className="info">로딩중...</div>}
    </>
  );
}

export default Search;
