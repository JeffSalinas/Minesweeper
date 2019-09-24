import React from 'react';
import Space from './space.jsx';

const Row = (props) => {

  return (
    <div className="rows">
      {props.rows.map((box, index) => {
        return (
          <Space
            row={props.row}
            col={index}
            box={box}
            key={index}
          /> 
        )
      })}
    </div>
  )
}

export default Row;