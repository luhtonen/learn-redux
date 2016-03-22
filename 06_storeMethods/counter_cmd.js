import {createStore} from 'redux';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

console.log('Initial state:', store.getState());

store.dispatch({type: INCREMENT});
console.log('State after dispatch:', store.getState());
