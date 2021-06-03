import { combineReducers } from 'redux';
import books from './books';
import savebooks from './savebooks';
import items from './items';
const rootReducer = combineReducers({
  books,
  savebooks,
  items,
});

export default rootReducer;
