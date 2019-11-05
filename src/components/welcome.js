import React from 'react';
import { useHistory }  from 'react-router-dom';

import Auth from './auth';

function WelcomeScreen() {
  let history = useHistory();
  
  function Login() { 
    Auth.authenticate(() => {
      history.push("/game");
    });
  }

  return(
    <>
      <section className="welcome">
        <div className="logo">X O</div>
        <h2>Welcome to the game</h2>

        <button 
          className="play-btn" 
          onClick={Login}
        >
          Let's Play
        </button>
      </section>
    </>
  );
}

export default WelcomeScreen;