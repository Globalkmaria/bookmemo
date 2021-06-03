import { getLocalItems, saveLocalItems } from '../api/Id';

const GET_ITEMS_PENDING = 'GET_ITEMS_PENDING';
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

const SAVE_NEWITEM = 'SAVE_NEWITEM';
const DELETE_ITEM = 'DELETE_ITEM';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

// 액션생성함수
export const saveItem = ({ id, data, editedTime }) => async (
  dispatch,
  getState
) => {
  const itemsData = getState().items;
  console.log(itemsData);
  const items = itemsData.data;
  // eslint-disable-next-line
  const sameitem = items.find((item) => item.id == id);
  console.log(sameitem);
  if (sameitem) {
    dispatch({ type: DELETE_ITEM, id: id });
  }
  const sendItem = { id: id, data: data, editedTime: editedTime };
  dispatch({ type: SAVE_NEWITEM, item: sendItem });
};

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const getItems = (token) => async (dispatch, getState) => {
  if (!token) return;
  console.log('getitems');
  try {
    dispatch({ type: GET_ITEMS_PENDING });
    let { data } = await getLocalItems(token);
    // eslint-disable-next-line
    if (data == undefined) {
      data = [];
    }
    dispatch({ type: GET_ITEMS_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_ITEMS_FAILURE, error: e });
  }
};
export const saveItemstoLocal = (token) => async (getState) => {
  const { data } = getState().items.items;
  try {
    saveLocalItems(token, data);
  } catch (e) {
    console.log(e);
  }
};
export const getItem = (postId) => (getState) => {
  const { data } = getState().items.items;
  console.log(data);
  const post = data.find((item) => item.id === postId);
  console.log(post);
  return post;
};
// 리듀서
export default function items(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS_PENDING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_ITEMS_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case GET_ITEMS_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.error,
      };

    case SAVE_NEWITEM:
      return {
        ...state,
        data: [action.item, ...state.data],
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: [...state.data.filter((item) => item.id !== action.id)],
      };
    default:
      return state;
  }
}
