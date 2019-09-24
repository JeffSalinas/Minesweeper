import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../actions';

const Space = (props) => {
  if (props.box > 0) {
    props.box = './img/blank.png';
    console.log('click')
  } else if (props.box === 0) {
    props.box = './img/unclicked.png';
  } 
  // else if (props.box < 0) {
    
  //   return (
  //     <>
  //       <img className="spaces" onClick={(event) =>  {
          
  //       } "spaces" src="./img/unclicked.png"></img>
  //     </>
  //   )
  // }
    


  const dispatch = useDispatch();
  

  return (
    <>
      <img className="spaces" onClick={(event) => {
        if (event.type === 'contextmenue') {
          dispatch(change(props.row, props.col, true));
        } else {
          dispatch(change(props.row, props.col));
        }
      } 
      } className="spaces" src={props.box}></img>
    </>
  )
}

export default Space;