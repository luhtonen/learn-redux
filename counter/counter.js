import expect from 'expect';

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREAMENT':
            return state + 1;
        case 'DECREAMENT':
            return state - 1;
        default:
            return state;
    }
}

expect(counter(0, {type: 'INCREAMENT'})).toEqual(1);
expect(counter(1, {type: 'INCREAMENT'}), 2).toEqual(2);
expect(counter(2, {type: 'DECREAMENT'}), 1).toEqual(1);
expect(counter(1, {type: 'DECREAMENT'}), 1).toEqual(0);
expect(counter(1, {type: 'SOMETHING_ELSE'})).toEqual(1);
expect(counter(undefined, {type: 'SOMETHING_ELSE'})).toEqual(0);

console.log('Test passed!');