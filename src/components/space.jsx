import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../actions';

const Space = (props) => {
  const dispatch = useDispatch();
  
  if (props.box === 11) {
    return (
      <>
        <img className="spaces" src={`./img/blank.png`}></img>
      </>
    )

  } else if (props.box === 10) {
      return (
        <>
          <img className="spaces" src={`./img/red_mine.png`}></img>
        </>
      )
  
  } else if (props.box > 0) {
    return (
      <>
        <img className="spaces" src= {`./img/${props.box}.png`}></img>
      </>
    )
  } else if (props.box === 0) {
    props.box = './img/unclicked.png';
  } else if (props.box < 0) {
    return (
      <>
        <img className="spaces" onContextMenu={(event) => {
          event.preventDefault();
          dispatch(change(props.row, props.col, true));
        }}
        src="./img/flag.png"></img>
      </>
    )
  }

  return (
    <>
      <img className="spaces" onContextMenu={(event) => {
        event.preventDefault();
        dispatch(change(props.row, props.col, true));
        }}
        onClick={() => {
          console.log('hello again')
          dispatch(change(props.row, props.col));
        }} 
        src={props.box}></img>
    </>
  )
}

export default Space;