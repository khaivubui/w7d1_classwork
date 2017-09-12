import { getTodos, createTodo } from '../util/todo_api_util.js';

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
  getTodos().then((resp) => {
    dispatch(receiveTodos(resp));
  });
};


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
