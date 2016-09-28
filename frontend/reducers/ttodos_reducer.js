import { RECEIVE_TTODOS, RECEIVE_TTODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const TtodosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TTODOS:
        return merge({}, state, action.ttodos);

    case RECEIVE_TTODO:
        const newState = merge({}, state);
        newState[action.ttodo.id] = action.ttodo;
        return newState;

    default:
      return state;

  }
};

export default TtodosReducer;
