import * as APIUtil from '../util/todo_api_util.js';
import { receiveErrors, clearErrors } from './error_actions.js';

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo
});

export const fetchTodos = (dispatch) => {
  APIUtil.getTodos().then((resp) => {
    dispatch(receiveTodos(resp));
  });
};

export const createTodo = (todo) => (dispatch) => {
  return APIUtil.postTodo(todo).then(
    resp => {
      dispatch(receiveTodo(resp));
      dispatch(clearErrors());
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const patchTodo = (todo) => (dispatch) => {
  return APIUtil.patchTodo(todo).then(
    resp => dispatch(receiveTodo(resp)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteTodo = (todo) => (dispatch) => {
  return APIUtil.deleteTodo(todo).then(
    resp => dispatch(removeTodo(resp)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
