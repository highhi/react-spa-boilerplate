import assert from 'power-assert';
import * as actions from '__actions/todos';

describe('todo actions', () => {
  it('#addTodo()', () => {
    const text = 'test';
    const date = '2016/01/01';

    const expected = {
      type: actions.ADD_TODO,
      text,
      date
    };

    assert.deepStrictEqual(actions.addTodo(text, date), expected);
  });
});
