import React, { PropTypes } from 'react';

const TodoList = (props) =>
  <div>
    <ul>
      { props.children }
    </ul>
  </div>;

TodoList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default TodoList;
