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
console.log('Initial state', store.getState());

const render = () => {
  document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: INCREMENT});
});