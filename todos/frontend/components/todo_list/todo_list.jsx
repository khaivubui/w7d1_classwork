import React from 'react';

import TodoForm from './todo_form.jsx';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={
                  () => this.props.removeTodo(todo)
                }>
                Delete
              </button>
              <button onClick={
                  () => this.props.updateTodo(todo)
                }>
                { todo.done ? "Undo" : "Done"}
              </button>
            </li>
          ))}
        </ul>
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
