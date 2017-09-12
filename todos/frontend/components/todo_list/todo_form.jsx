import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleTitleChange(title) {
    this.setState({title});
  }

  handleBodyChange(body) {
    this.setState({body});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo({
      id: this.uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
    });
    this.setState({
      title: "",
      body: ""
    });
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>Title:
          <input type='text'
                 value={this.state.title}
                 onChange={(e) => this.handleTitleChange(e.target.value)}/>
        </label><br/>
        <label>Body:
          <textarea type='text'
                 value={this.state.body}
                 onChange={(e) => this.handleBodyChange(e.target.value)}/>
        </label>
        <input type='submit' value='Create Todo'/>
      </form>
    );
  }
}

export default TodoForm;
