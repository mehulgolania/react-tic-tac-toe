import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from '../layout/layout';

import BackgroundMusic from '../sound/background.mp3';

class App extends React.Component{
  getRandonScheme = () => {
    const colorScheme = ['color-scheme-1', 'color-scheme-2', 'color-scheme-3', 'color-scheme-4', 'color-scheme-5'];
    var random = colorScheme[Math.floor(Math.random() * colorScheme.length)];
    document.body.classList.add(random);
  }

  letsPlayMusic = () => {
    const bg = new Audio(BackgroundMusic);
    bg.volume = 0.10;
    bg.autoplay = true;
    bg.loop = true;
  }

  componentDidMount(){
    this.getRandonScheme()
    this.letsPlayMusic();
  }

  render(){
    return(
      <>
        <BrowserRouter>
          <Route component={Layout} />
        </BrowserRouter>        
      </>
    )
  }
}

export default App;
