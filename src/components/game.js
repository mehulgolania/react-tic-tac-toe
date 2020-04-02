import React from 'react';
import Board from './board';

class Game extends React.Component{
  constructor(props){
    super(props)

    this.state = this.initialState;
  }

  get initialState() {
    return {
      isPlayer: true,
      player1: 'X',
      player2: 'O',
      boxValue: Array(9).fill(null),
      gameStatus: false,
      winner: null
    }
  }

  handleClick = (i) => {
    const player1 = this.state.player1;
    const player2 = this.state.player2;

    console.log('Checking Click', i);

    //const player = this.state.isPlayer ? player1 : player2;

    const boxValue = this.state.boxValue.slice();
    boxValue[i] = 'X';
    //console.log(boxValue);
    this.setState({
      boxValue: boxValue
    });
    console.log(this.state.boxValue);
    
    //const newButtonValue = this.state.boxValue;
    //const currentIndex = event.target.getAttribute('dataindex');

    //event.target.innerText = player;
    //event.target.disabled = true;    
    //newButtonValue[currentIndex] = player;
    
    // this.setState({
    //   ...this.state,
    //   isPlayer: this.state.isPlayer ? false : true,
    //   //boxValue: newButtonValue
    // });

    //this.checkWinner()
  }

  checkWinner = () => {
    const filledBox = this.state.boxValue;

    if ( (filledBox[0] === "X" && filledBox[1] === "X" && filledBox[2] === "X") || (filledBox[3] === "X" && filledBox[4] === "X" && filledBox[5] === "X") || (filledBox[6] === "X" && filledBox[7] === "X" && filledBox[8] === "X") || (filledBox[0] === "X" && filledBox[4] === "X" && filledBox[8] === "X") || (filledBox[2] === "X" && filledBox[4] === "X" && filledBox[6] === "X") || (filledBox[0] === "X" && filledBox[3] === "X" && filledBox[6] === "X") || (filledBox[1] === "X" && filledBox[4] === "X" && filledBox[7] === "X") || (filledBox[2] === "X" && filledBox[5] === "X" && filledBox[8] === "X") ){
      //alert('X Winner');
      this.setState({
        winner: this.state.player1,
        gameStatus: true
      })
    }
    else if( (filledBox[0] === "O" && filledBox[1] === "O" && filledBox[2] === "O") || (filledBox[3] === "O" && filledBox[4] === "O" && filledBox[5] === "O") || (filledBox[6] === "O" && filledBox[7] === "O" && filledBox[8] === "O") || (filledBox[0] === "O" && filledBox[4] === "O" && filledBox[8] === "O") || (filledBox[2] === "O" && filledBox[4] === "O" && filledBox[6] === "O") || (filledBox[0] === "O" && filledBox[3] === "O" && filledBox[6] === "O") || (filledBox[1] === "O" && filledBox[4] === "O" && filledBox[7] === "O") || (filledBox[2] === "O" && filledBox[5] === "O" && filledBox[8] === "O") ){
      this.setState({
        winner: this.state.player2,
        gameStatus: true
      })
    }
  }

  handleReset = () => {
    this.setState(this.initialState);
  }

  render(){
    const player = this.state.isPlayer ? this.state.player1 : this.state.player2;
    const gameStatus = this.state.gameStatus;
    const winner = this.state.winner;

    return(
      <>
        

        <div className="game-wrapper">
          
          <div className="board-details">
            {/* { gameStatus ? <h1>"{winner} WON"</h1> : <h1>Player {player} turn</h1> } */}
            <button onClick={this.handleReset}>Reset</button>
          </div>

          <div className="board-wrapper">
            <Board 
              click={this.handleClick}
              tileValue={this.state.boxValue}
            />
          </div>
        </div>
      </>
    );  
  }
}

export default Game;