import React from "react";
import Tile from './tile';

class Board extends React.Component{
  render(){
    return(
      <>
        <div className="board">
          <Tile onClick={this.props.click} dataindex="0" className="tile" />
          <Tile onClick={this.props.click} dataindex="1" className="tile" />
          <Tile onClick={this.props.click} dataindex="2" className="tile" />
          <Tile onClick={this.props.click} dataindex="3" className="tile" />
          <Tile onClick={this.props.click} dataindex="4" className="tile" />
          <Tile onClick={this.props.click} dataindex="5" className="tile" />
          <Tile onClick={this.props.click} dataindex="6" className="tile" />
          <Tile onClick={this.props.click} dataindex="7" className="tile" />
          <Tile onClick={this.props.click} dataindex="8" className="tile" />
        </div>
      </>
    );
  }
}

export default Board;