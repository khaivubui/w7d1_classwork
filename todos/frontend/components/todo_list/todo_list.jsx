import React from 'react';

import TodoForm from './todo_form.jsx';
import TodoItem from './todo_item.jsx';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem todo={todo}
                      key={todo.id}
                      removeTodo={this.props.removeTodo}
                      updateTodo={this.props.updateTodo}/>
          ))}
        </ul>
        {this.props.errors.map( err => (
          <li>{err}</li>
        ))}
        <TodoForm receiveTodo={this.props.receiveTodo}/>
      </div>
    );
  }
}

export default TodoList;
