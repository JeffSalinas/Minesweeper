export const increment = () => { 
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const change = (row, col, flag = false) => {
  return {
    type: 'change',
    row: row,
    col: col,
    flag: flag
  }
}
