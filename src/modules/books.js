import { recommandBookData } from '../api/Id';
import Kakao from '../api/Kakao';
import sleep from '../utils/sleep';

// 액션타입

const GET_RECOMMANDBOOKS_SUCCESS = 'GET_RECOMMANDBOOKS_SUCCESS';

const GET_BOOKS_PENDING = 'GET_BOOKS_PENDING';
const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
const GET_BOOKS_FAILURE = 'GET_BOOKS_FAILURE';

export const initialState = {
  loading: false,
  query: '',
  page: 1,
  data: recommandBookData,
  isEnd: true,
  error: null,
};

// 액션 생성함수
export const fetchRecommadBook = (recommand, query = '', loadMore = false) => (
  dispatch,
  getState
) => {
  // console.log(`recommand: ${recommand}`);
  const data = recommandBookData;
  dispatch({
    type: GET_RECOMMANDBOOKS_SUCCESS,
    data: data,
    isEnd: true,
    loadMore,
  });
};
export const fetchBookList = (
  query,
  loadMore = false,
  mainsearch = false
) => async (dispatch, getState) => {
  const { loading, isEnd, page, data } = getState().books;
  if (loading) return;
  if (loadMore && isEnd) return;
  if (loadMore && (!data || !data.length)) return;
  if (mainsearch) return;
  try {
    dispatch({ type: GET_BOOKS_PENDING, query, loadMore });
    await sleep(500);
    const { data } = await Kakao.fetchBookList({
      query,
      size: 10,
      target: 'title',
      page: loadMore ? page : 1,
    });
    dispatch({
      type: GET_BOOKS_SUCCESS,
      data: data.documents,
      isEnd: data.meta.is_end,
      loadMore,
    });
  } catch (e) {
    dispatch({ type: GET_BOOKS_FAILURE, error: e });
  }
};

// 리듀서
export default function books(state = initialState, action) {
  const { type, loadMore, query, data, isEnd, error } = action;
  switch (type) {
    case GET_RECOMMANDBOOKS_SUCCESS:
      return {
        ...state,
        data,
        isEnd,
        query,
      };
    case GET_BOOKS_PENDING:
      return {
        loading: true,
        query,
        page: loadMore ? state.page : 1,
        isEnd: null,
        data: loadMore ? state.data : null,
        error: null,
      };
    // case GET_BOOKS_SUCCESS:
    // return {
    //   ...state,
    //   loading: false,
    //   page: state.page + 1,
    //   isEnd,
    //   data: loadMore ? [...state.data, ...data] : data,
    //   error: null,
    // };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        isEnd,
        data: loadMore ? [...state.data, ...data] : data,
        error: null,
      };
    case GET_BOOKS_FAILURE:
      return {
        loading: false,
        query: '',
        page: 1,
        isEnd: false,
        data: null,
        error,
      };
    default:
      return state;
  }
}
