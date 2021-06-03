//액션타입
const SAVE_BOOK = 'SAVE_BOOK';
const RESET_SAVEDBOOK = 'RESET_SAVEBOOK';
const DELETE_SAVEDBOOK = 'DELETE_SAVEDBOOK';

const initialState = [];
// 액션생성함수
export const saveBook = (book) => (dispatch, getState) => {
  const savedBooks = getState().savebooks;
  if (savedBooks.some((savedbook) => savedbook.isbn === book.isbn)) return;
  dispatch({ type: SAVE_BOOK, book });
};
export const resetSaveBook = () => ({
  type: RESET_SAVEDBOOK,
});
export const deleteBook = (id) => (dispatch, getState) => {
  const savedBooks = getState().savebooks;
  if (!savedBooks.some((savedbook) => savedbook.id === id)) return;
  dispatch({ type: DELETE_SAVEDBOOK, id });
};
// 리듀서
export default function savebooks(state = initialState, action) {
  const { type, book, id } = action;
  switch (type) {
    case SAVE_BOOK:
      return [
        ...state,
        {
          ...book,
          id:
            state.length !== 0
              ? Math.max(...state.map((item) => item.id)) + 1
              : 1,
        },
      ];
    case RESET_SAVEDBOOK:
      return initialState;
    case DELETE_SAVEDBOOK:
      return [...state.filter((book) => book.id !== id)];
    default:
      return state;
  }
}
