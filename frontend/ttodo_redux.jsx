import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allTodos } from './reducers/selector';
import { requestTtodos } from './actions/todo_actions';
import Root from './components/root';

window.requestTtodos = requestTtodos;
window.store = configureStore();
window.allTodos = allTodos;

document.addEventListener("DOMContentLoaded", () => {
  let rootEl = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, rootEl);
});
