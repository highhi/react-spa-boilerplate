import { ADD_TODO } from 'actions/todos';

function todo(state = {}, action) {
  const { id, text, date, type } = action;

  switch (type) {
    case ADD_TODO:
      return { id, text, date };
    default:
      return state;
  }
}

export default function todos(state = [], action) {
  const { type } = action;

  switch (type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    default:
      return state;
  }
}
