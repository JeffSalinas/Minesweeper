let numbers = [];

// let numbers = [
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4],
//   [1, 3, 3, 4, 5, 7, 3, 5, 3, 4]
// ];

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

const newBoard = (n) => {
  let result = [];

  for (let row = 0; row < n; row++) {
    let rowArray = []
    for (let col = 0; col < n; col++) {
      rowArray.push(11);
    }
    result.push(rowArray);
  }
  function howManyMines() {
    let count = 0;
    let flatArray = result.flat();

    for(let dot of flatArray) {
      if (dot === 10) {
        count++;
      }
    }

    return count;
  }

  while (howManyMines() < n) {
    result[Math.floor(Math.random() * 9)][Math.floor(Math.random() * 9)] = 10;
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      let count = 0;

      if (result[row][col] !== 11){
        continue;

      } else {
        if (row !== 0 && row !== result.length - 1 && col !== 0 && col !== result[0].length - 1) {
          if (result[row - 1][col - 1] === 10) {
            count++
          }
          if (result[row - 1][col] === 10) {
            count++
          }
          if (result[row - 1][col + 1] === 10) {
            count++
          }
          if (result[row][col - 1] === 10) {
            count++
          }
          if (result[row][col + 1] === 10) {
            count++
          }
          if (result[row + 1][col - 1] === 10) {
            count++
          }
          if (result[row + 1][col] === 10) {
            count++
          }
          if (result[row + 1][col + 1] === 10) {
            count++
          }
          count === 0 ? result[row][col] = 11 : result[row][col] = count;
        } else if (row === 0) {
          if (result[row][col - 1] === 10) {
            count++
          }
          if (result[row][col + 1] === 10) {
            count++
          }
          if (result[row + 1][col - 1] === 10) {
            count++
          }
          if (result[row + 1][col] === 10) {
            count++
          }
          if (result[row + 1][col + 1] === 10) {
            count++
          }
          count === 0 ? result[row][col] = 11 : result[row][col] = count;
        } else if (row === result.length - 1) {
          if (result[row - 1][col - 1] === 10) {
            count++
          }
          if (result[row - 1][col] === 10) {
            count++
          }
          if (result[row - 1][col + 1] === 10) {
            count++
          }
          if (result[row][col - 1] === 10) {
            count++
          }
          if (result[row][col + 1] === 10) {
            count++
          }
          count === 0 ? result[row][col] = 11 : result[row][col] = count;
        } else if (col === 0) {
          if (result[row - 1][col] === 10) {
            count++
          }
          if (result[row - 1][col + 1] === 10) {
            count++
          }
          if (result[row][col + 1] === 10) {
            count++
          }
          if (result[row + 1][col] === 10) {
            count++
          }
          if (result[row + 1][col + 1] === 10) {
            count++
          }
          count === 0 ? result[row][col] = 11 : result[row][col] = count;
        } else if (col === result[0].length - 1) {
          if (result[row - 1][col - 1] === 10) {
            count++
          }
          if (result[row - 1][col] === 10) {
            count++
          }
          if (result[row][col - 1] === 10) {
            count++
          }
          if (result[row + 1][col - 1] === 10) {
            count++
          }
          if (result[row + 1][col] === 10) {
            count++
          }
          count === 0 ? result[row][col] = 11 : result[row][col] = count;
        }
      }
    }
  }
  console.log(result);
  numbers = result;
};

const gameboardChange = (state, action) => {
  if (start <= 3) {
    newBoard(10)
    state = showing;
    start++;
  } 
  let temp = state.slice();

  // const uncoverLots = (row, col) => {
  //   if (row !== 0 && row !== numbers.length - 1 && col !== 0 && col !== numbers[0].length - 1) {
  //     if (numbers[row - 1][col - 1] === 11) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //       uncoverLots(row - 1, col - 1)
  //     } else if (numbers[row - 1][col - 1] > 0 && numbers[row - 1][col - 1] < 9) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //     }

  //     if (numbers[row - 1][col] === 11) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //       uncoverLots(row - 1, col)
  //     } else if (numbers[row - 1][col] > 0 && numbers[row - 1][col] < 9) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //     }

  //     if (numbers[row - 1][col + 1] === 11) {
  //       temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //       uncoverLots(row - 1, col + 1)
  //     } else if (numbers[row - 1][col + 1] > 0 && numbers[row - 1][col + 1] < 9) {
  //       temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //     }

  //     if (numbers[row][col - 1] === 11) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //       uncoverLots(row, col - 1)
  //     } else if (numbers[row][col - 1] > 0 && numbers[row][col - 1] < 9) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //     }

  //     if (numbers[row][col + 1] === 11) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //       uncoverLots(row, col + 1)
  //     } else if (numbers[row][col + 1] > 0 && numbers[row][col + 1] < 9) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //     }

  //     if (numbers[row + 1][col - 1] === 11) {
  //       temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //       uncoverLots(row + 1, col - 1)
  //     } else if (numbers[row + 1][col - 1] > 0 && numbers[row + 1][col - 1] < 9) {
  //       temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //     }

  //     if (numbers[row + 1][col] === 11) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //       uncoverLots(row + 1, col)
  //     } else if (numbers[row + 1][col] > 0 && numbers[row + 1][col] < 9) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //     }

  //     if (numbers[row + 1][col + 1] === 11) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //       uncoverLots(row + 1, col + 1)
  //     } else if (numbers[row + 1][col + 1] > 0 && numbers[row + 1][col + 1] < 9) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //     }

  //   } else if (row === 0) {

  //     if (col !== 0) {
  //       if (numbers[row][col - 1] === 11) {
  //         temp[row][col - 1] = numbers[row][col - 1]
  //         uncoverLots(row, col - 1)
  //       } else if (numbers[row][col - 1] > 0 && numbers[row][col - 1] < 9) {
  //         temp[row][col - 1] = numbers[row][col - 1]
  //       }

  //       if (numbers[row + 1][col - 1] === 11) {
  //         temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //         uncoverLots(row + 1, col - 1)
  //       } else if (numbers[row + 1][col - 1] > 0 && numbers[row + 1][col - 1] < 9) {
  //         temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //       }
  //     }

  //     if (numbers[row][col + 1] === 11) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //       uncoverLots(row, col + 1)
  //     } else if (numbers[row][col + 1] > 0 && numbers[row][col + 1] < 9) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //     }

  //     if (numbers[row + 1][col] === 11) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //       uncoverLots(row + 1, col)
  //     } else if (numbers[row + 1][col] > 0 && numbers[row + 1][col] < 9) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //     }

  //     if (numbers[row + 1][col + 1] === 11) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //       uncoverLots(row + 1, col + 1)
  //     } else if (numbers[row + 1][col + 1] > 0 && numbers[row + 1][col + 1] < 9) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //     }

  //   } else if (row === numbers.length - 1) {
  //     if (numbers[row - 1][col - 1] === 11) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //       uncoverLots(row - 1, col - 1)
  //     } else if (numbers[row - 1][col - 1] > 0 && numbers[row - 1][col - 1] < 9) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //     }

  //     if (numbers[row - 1][col] === 11) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //       uncoverLots(row - 1, col)
  //     } else if (numbers[row - 1][col] > 0 && numbers[row - 1][col] < 9) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //     }

  //     if (numbers[row - 1][col + 1] === 11) {
  //       temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //       uncoverLots(row - 1, col + 1)
  //     } else if (numbers[row - 1][col + 1] > 0 && numbers[row - 1][col + 1] < 9) {
  //       temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //     }
      
  //     if (numbers[row][col - 1] === 11) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //       uncoverLots(row, col - 1)
  //     } else if (numbers[row][col - 1] > 0 && numbers[row][col - 1] < 9) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //     }

  //     if (numbers[row][col + 1] === 11) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //       uncoverLots(row, col + 1)
  //     } else if (numbers[row][col + 1] > 0 && numbers[row][col + 1] < 9) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //     }
  //   } else if (col === 0) {
  //     if (row !== 0) {
  //       if (numbers[row - 1][col] === 11) {
  //         temp[row - 1][col] = numbers[row - 1][col]
  //         uncoverLots(row - 1, col)
  //       } else if (numbers[row - 1][col] > 0 && numbers[row - 1][col] < 9) {
  //         temp[row - 1][col] = numbers[row - 1][col]
  //       }

  //       if (numbers[row - 1][col + 1] === 11) {
  //         temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //         uncoverLots(row - 1, col + 1)
  //       } else if (numbers[row - 1][col + 1] > 0 && numbers[row - 1][col + 1] < 9) {
  //         temp[row - 1][col + 1] = numbers[row - 1][col + 1]
  //       }
  //     }

  //     if (numbers[row][col + 1] === 11) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //       uncoverLots(row, col + 1)
  //     } else if (numbers[row][col + 1] > 0 && numbers[row][col + 1] < 9) {
  //       temp[row][col + 1] = numbers[row][col + 1]
  //     }
  //     if (numbers[row + 1][col] === 11) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //       uncoverLots(row + 1, col)
  //     } else if (numbers[row + 1][col] > 0 && numbers[row + 1][col] < 9) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //     }

  //     if (numbers[row + 1][col + 1] === 11) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //       uncoverLots(row + 1, col + 1)
  //     } else if (numbers[row + 1][col + 1] > 0 && numbers[row + 1][col + 1] < 9) {
  //       temp[row + 1][col + 1] = numbers[row + 1][col + 1]
  //     }

  //   } else if (col === numbers[0].length - 1) {
  //     if (numbers[row - 1][col - 1] === 11) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //       uncoverLots(row - 1, col - 1)
  //     } else if (numbers[row - 1][col - 1] > 0 && numbers[row - 1][col - 1] < 9) {
  //       temp[row - 1][col - 1] = numbers[row - 1][col - 1]
  //     }

  //     if (numbers[row - 1][col] === 11) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //       uncoverLots(row - 1, col)
  //     } else if (numbers[row - 1][col] > 0 && numbers[row - 1][col] < 9) {
  //       temp[row - 1][col] = numbers[row - 1][col]
  //     }

  //     if (numbers[row][col - 1] === 11) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //       uncoverLots(row, col - 1)
  //     } else if (numbers[row][col - 1] > 0 && numbers[row][col - 1] < 9) {
  //       temp[row][col - 1] = numbers[row][col - 1]
  //     }

  //     if (numbers[row + 1][col - 1] === 11) {
  //       temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //       uncoverLots(row + 1, col - 1)
  //     } else if (numbers[row + 1][col - 1] > 0 && numbers[row + 1][col - 1] < 9) {
  //       temp[row + 1][col - 1] = numbers[row + 1][col - 1]
  //     }

  //     if (numbers[row + 1][col] === 11) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //       uncoverLots(row + 1, col)
  //     } else if (numbers[row + 1][col] > 0 && numbers[row + 1][col] < 9) {
  //       temp[row + 1][col] = numbers[row + 1][col]
  //     }
  //   }
  // }

  const uncoverLots = (row, col) => {
    if (numbers[row - 1]) {

    }

    if (numbers[row + 1]) {

    }
    
    if (numbers[col - 1]) {

    }

    if (numbers[col + 1]) {
      
    }

  }

 

  if (action.flag) {
    numbers[action.row][action.col] = numbers[action.row][action.col] * -1; //0 does not multiply by negitive 1
    if (numbers[action.row][action.col] < 0) {
      temp[action.row][action.col] = numbers[action.row][action.col];
    } else {
      temp[action.row][action.col] = 0;
    }
    state = temp;
  } else if (action.type === 'change') {
    if (numbers[action.row][action.col] === 11) {
      uncoverLots([action.row], [action.col]);
    } else {
    // if (numbers[action.row][action.col] > 0 ) { //here
      temp[action.row][action.col] = numbers[action.row][action.col];
      state = temp;
    }
  }
  if (action.type === 'change') {

    console.log(state[action.row][action.col]);
  }
  return state;
}

export default gameboardChange;