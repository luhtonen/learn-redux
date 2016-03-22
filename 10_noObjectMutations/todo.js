import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
  // mutable version
  // todo.completed = !todo.completed;
  //return todo;

  // immutable version by manual copy
  //return {
  //  id: todo.id,
  //  text: todo.text,
  //  completed: !todo.completed
  //};

  // immutable version with ES6 Object.assign() method
  //return Object.assign({}, todo , {
  //  completed: !todo.completed
  //});

  // immutable version with ES7 features
  return {
    ...todo,
    completed: !todo.completed
  };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  };
  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All test passed.');