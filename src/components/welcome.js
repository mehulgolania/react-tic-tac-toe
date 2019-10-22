import React from 'react';
import click from '../sound/click-1.mp3';
import { useHistory }  from 'react-router-dom';

import Auth from './auth';

function WelcomeScreen() {
  let history = useHistory();
  
  function getClickSound() {
    const clickBtn = new Audio(click);
    clickBtn.play();
    
    Auth.authenticate(() => {
      history.push("/game");
    });
  }

  return(
    <>
      <section className="welcome">
        <div className="logo">X O</div>
        <h2>Welcome to the game</h2>

        <button className="play-btn" onClick={getClickSound}>Let's Play</button>
      </section>
    </>
  );
}

export default WelcomeScreen;