import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange (e) {
    this.setState({ title: e.currentTarget.value });
  }

  onBodyChange (e) {
    this.setState({ body: e.currentTarget.value });
  }

  onSubmit (e) {
    e.preventDefault();
    this.props.createTtodo(this.state);
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label> Title
          <input
            type="text"
            value={this.state.title}
            onChange={this.onTitleChange}
            />
        </label>
        <label> Body
          <input
            type="text"
            value={this.state.body}
            onChange={this.onBodyChange}
            />
        </label>
        <button>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
