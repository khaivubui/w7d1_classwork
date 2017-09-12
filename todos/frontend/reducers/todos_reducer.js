import { merge } from 'lodash';

import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  UPDATE_TODO
  } from '../actions/todo_actions.js';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const oldState = merge({}, state);
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
    // const newTodo = {(action.todo.id): action.todo};
      const newTodo = {};
      newTodo[action.todo.id] = action.todo;
      return merge(newTodo, state);
    case REMOVE_TODO:
      const newState1 = {};
      Object.keys(state).forEach(id => {
        if (!(action.todo.id === parseInt(id))) {
          newState1[id] = oldState[id];
        }
      });
      return newState1;
    case UPDATE_TODO:
      oldState[action.todo.id].done =
          !oldState[action.todo.id].done;
      return oldState;
    default:
      return state;
  }
};

export default todosReducer;
