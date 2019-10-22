import React from 'react';

class Tile extends React.Component{
  render(){
    return(
      <button 
        onClick={this.props.onClick}
        dataindex={this.props.dataindex} 
        className="tile"
      /> 
    );
  }
}

export default Tile;