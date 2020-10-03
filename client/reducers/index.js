import { combineReducers } from 'redux';
import informationReducer from './informationReducer.js';

export default combineReducers({
  informationReducer: informationReducer,
});