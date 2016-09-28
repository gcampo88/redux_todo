import {
  receiveTtodos,
  receiveTtodo,
  createTtodo,
  CREATE_TTODO,
  REQUEST_TTODOS,
  RECEIVE_TTODOS
} from '../actions/todo_actions';
import { fetchTtodos, createTodo } from '../util/ttodo_api_util';

const AsyncMiddleware = (store) => (next) => (action) => {
  let success, error;
  switch (action.type) {
    case REQUEST_TTODOS:
      success = (ttodos) => (store.dispatch(receiveTtodos(ttodos)));
      error = (error) => console.log(error);
      return fetchTtodos(success, error);

    case CREATE_TTODO:
      success = (ttodo) => (store.dispatch(receiveTtodo(ttodo)));
      error = (error) => console.log(error);
      return createTodo(action.ttodo, success, error);

    default:
      return next(action);
  }
};

export default AsyncMiddleware;
