import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import {
  receiveTodo,
  removeTodo,
  updateTodo,
  fetchTodos,
  createTodo,
  patchTodo,
  deleteTodo
  } from '../../actions/todo_actions.js';


const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  // receiveTodo(todo) {dispatch(receiveTodo(todo)); }
  receiveTodo: (todo) => dispatch(createTodo(todo)),
  removeTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(patchTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos)
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
