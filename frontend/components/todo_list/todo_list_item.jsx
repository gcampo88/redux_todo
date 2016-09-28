import React from 'react';

const TodoListItem = (props) => (
  <li>
    <h2>{props.todo.title}</h2>
    <h4>{props.todo.body}</h4>
  </li>
);

export default TodoListItem;
