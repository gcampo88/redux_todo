import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selector';
import { requestTtodos, createTtodo } from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  ttodos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestTtodos: () => dispatch(requestTtodos()),
  createTtodo: (todo) => dispatch(createTtodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
