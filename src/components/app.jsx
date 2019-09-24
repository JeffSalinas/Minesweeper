import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';
import Row from './row.jsx';

const App = () => {
  const counter = useSelector(state => state.counter);
  const gameboard = useSelector(state => state.change);
  const dispatch = useDispatch();

  return(
    <div>
      <div>Hello from App!</div> 
      <h1>Counter {counter}</h1>
      <h1>Gameboard</h1>
      <div id="gameboard">
        {gameboard.map((row, index) => {
          return (
            <Row 
              rows={row}
              row={index}
              key={index}
            />
          )
        })}
      </div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App;