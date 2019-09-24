let numbers = [
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
  [1, 3, 3, 4, 5, 7, 3, 5, 3, 4]
];

let showing = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let start = 1;

const gameboardChange = (state, action) => {
  if (start <= 3) {
    console.log('hello')
    state = showing;
    start++;
  } 
  let temp = state.slice();

  if (action.flag) {
    temp[action.row][action.col] = numbers[action.row][action.col] * -1;
    state = temp;
  } else if (action.type === 'change') {
    temp[action.row][action.col] = numbers[action.row][action.col];
    state = temp;
  }
  return state;
}

export default gameboardChange;
