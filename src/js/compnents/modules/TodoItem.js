import React, { PropTypes } from 'react';

const Todo = (props) => {
  const { id, text, date } = props.todo;

  return (
    <li data-todo-id = { id }>
      <span>{ text }</span>
      <span>{ date }</span>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
