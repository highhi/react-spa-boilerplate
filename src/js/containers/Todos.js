import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'material-ui';
import * as todoActions from 'actions/todos';
import TodoList from 'modules/TodoList';
import TodoItem from 'modules/TodoItem';
import Calender from 'parts/Calender';
import { keysToCamelCase } from 'util';

const inputName = {
  todo: 'input_todo',
  date: 'input_date',
};

class Todos extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputTodo, inputDate } = keysToCamelCase(event.target,
      [inputName.todo, inputName.date]
    );

    if (!inputTodo.value || !inputDate.value) return;

    this.props.addTodo(inputTodo.value, inputDate.value);
    inputTodo.value = '';
  }

  renderTodos() {
    return this.props.todos.map((todo, i) =>
      <TodoItem key = { i } todo = { todo } />
    );
  }

  render() {
    return (
      <div>
        <TodoList>
          { this.renderTodos() }
        </TodoList>
        <form onSubmit = { this.handleSubmit }>
          <TextField
            name = { inputName.todo }
            floatingLabelText = "Input Todo"
            floatingLabelFixed = { false }
            fullWidth
          />
          <Calender hintText = "日付" name = { inputName.date } />
          <RaisedButton primary type = "submit" label = "送信" />
        </form>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

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
