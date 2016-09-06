import React, { PropTypes } from 'react';

const Todo = (props) => {
  const { text, date } = props.todo;

  return (
    <li>
      <span>{ text }</span>
      <span>{ date }</span>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Todo;
