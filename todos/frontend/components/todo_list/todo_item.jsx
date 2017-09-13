import React from 'react';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden: true};
  }

  toggleHidden() {
    this.setState({hidden: !this.state.hidden});
    console.log("bananas");
  }

  render() {
    const todo = this.props.todo;
    return (
      <li key={todo.id}>
        <span onClick={() => this.toggleHidden()}>{todo.title}</span>
        <br/>
        <span hidden={this.state.hidden}>
          {todo.body}
          <button onClick={
              () => this.props.removeTodo(todo)
            }>
            Delete
          </button>
          <button onClick={
              () => {
                todo.done = !todo.done;
                this.props.updateTodo(todo);
              }
            }>
            { todo.done ? "Undo" : "Done"}
          </button>
        </span>
      </li>
    );
  }
}

export default TodoItem;
