import assert from 'power-assert';
import * as actions from '__actions/todos';
import reducer from '__reducers/todos';

describe('todo reducer', () => {
  it('NO ACTION', () => {
    assert.deepStrictEqual(reducer(undefined, {}), []);
  });

  it('ADD_TODO', () => {
    const id = 0;
    const text = 'test';
    const date = '2016/01/01';

    const expected = [{
      id,
      text,
      date
    }];

    assert.deepStrictEqual(reducer(undefined, {
      type: actions.ADD_TODO,
      id,
      text,
      date
    }), expected);
  });
});
