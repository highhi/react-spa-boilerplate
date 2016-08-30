export const ADD_TODO = 'ADD_TODO';

export function addTodo(text, date) {
  return {
    type: ADD_TODO,
    text,
    date,
  };
}
