import React from "react";
import Tile from './tile';

class Board extends React.Component{
  renderTile(i) {
    return <Tile 
      value={this.props.tileValue[i]} 
      onClick={ () => this.props.click(i) } 
    />;
  }


  render(){
    return(
      <>
        <div className="board">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
          {this.renderTile(4)}
          {this.renderTile(5)}
          {this.renderTile(6)}
          {this.renderTile(7)}
          {this.renderTile(8)}

          {/* <Tile onClick={this.props.click} dataindex="0" />
          <Tile onClick={this.props.click} dataindex="1" />
          <Tile onClick={this.props.click} dataindex="2" />
          <Tile onClick={this.props.click} dataindex="3" />
          <Tile onClick={this.props.click} dataindex="4" />
          <Tile onClick={this.props.click} dataindex="5" />
          <Tile onClick={this.props.click} dataindex="6" />
          <Tile onClick={this.props.click} dataindex="7" />
          <Tile onClick={this.props.click} dataindex="8" /> */}
        </div>
      </>
    );
  }
}

export default Board;