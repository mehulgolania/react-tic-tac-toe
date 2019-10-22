import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import WelcomeScreen from '../components/welcome';
import Game from '../components/game';
import Auth from '../components/auth';


function PrivateRoute({ children }) {
  return (
    <Route render={() => Auth.isAuthenticated ? ( children ) : ( <Redirect to={{pathname: "/"}} /> )} />
  );
}

class Layout extends React.Component{
  render(){
    return(
      <>
        <Header />

        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          
          <PrivateRoute path="/game">
            <Game />
          </PrivateRoute>
        </Switch>

        <Footer />
      </>
    );
  }
}

export default Layout;