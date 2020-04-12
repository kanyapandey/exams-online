/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import AppReducer from './app.reducer';
import createTestReducer from '../../component/exam/_store/create-test.reducer';

export default combineReducers({
  app: AppReducer,
  createtest:createTestReducer
});