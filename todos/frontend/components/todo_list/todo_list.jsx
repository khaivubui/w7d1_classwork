import React from 'react';

import TodoForm from './todo_form.jsx';

const TodoList = (props) => {


  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={
                () => props.removeTodo(todo)
              }>
              Delete
            </button>
            <button onClick={
                () => props.updateTodo(todo)
              }>
              { todo.done ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};

export default TodoList;
