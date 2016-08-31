import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';
import * as todoActions from '__actions/todos';
import TodoList from '__components/modules/TodoList';
import TodoItem from '__components/modules/TodoItem';
import Calender from '__components/parts/Calender';
import { keysToCamelCase } from '__util';

const inputTodo = {
  text: 'input_text',
  date: 'input_date',
};

class Todos extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    addTodo: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputText, inputDate } = keysToCamelCase(event.target,
      [inputTodo.text, inputTodo.date]
    );

    if (!inputText.value || !inputDate.value) return;

    this.props.addTodo(inputText.value, inputDate.value);
    inputText.value = '';
  }

  renderTodos() {
    return this.props.todos.map((todo, i) =>
      <TodoItem key={i} todo={todo} />
    );
  }

  render() {
    return (
      <div>
        <TodoList>
          { this.renderTodos() }
        </TodoList>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name={inputTodo.text}
            floatingLabelText="Input Todo"
            floatingLabelFixed={false}
            fullWidth
          />
          <Calender hintText="日付" name={inputTodo.date} />
          <RaisedButton primary type="submit" label="送信" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { todos } = state;
  return {
    todos,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(todoActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
