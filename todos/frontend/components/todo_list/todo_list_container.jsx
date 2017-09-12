import { connect } from 'react-redux';
import TodoList from './todo_list.jsx';
import allTodos from '../../reducers/selectors.js';
import {
  receiveTodo,
  removeTodo,
  updateTodo,
  fetchTodos,
  createTodo
  } from '../../actions/todo_actions.js';


const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  // receiveTodo(todo) {dispatch(receiveTodo(todo)); }
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos)
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
