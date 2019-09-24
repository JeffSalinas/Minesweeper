import counterReducer from './counter';
import gameboardChange from './gameboard';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  change: gameboardChange
});

export default allReducers;