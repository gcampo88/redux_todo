import { combineReducers } from 'redux';
import TtodosReducer from './ttodos_reducer';

const RootReducer = combineReducers({
  ttodos: TtodosReducer
});

export default RootReducer;
