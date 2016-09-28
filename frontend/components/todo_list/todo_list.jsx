import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTtodos();
  }

  render() {
    let todos = this.props.ttodos.map((todo) => (
      <TodoListItem key={todo.id} todo={todo}/>)
    );
    return (
      <div>
        <TodoForm createTtodo={this.props.createTtodo} />
        <ul>
          <h1> Todo! </h1>
          {todos}
        </ul>
      </div>
    );

  }
}

export default TodoList;
