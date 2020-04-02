import React from 'react';

const Tile = props => {
  return(
    <button 
      onClick={props.onClick}
      className="button"
    >
      {props.value}
    </button> 
  );
}

export default Tile;