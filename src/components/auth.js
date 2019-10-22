const Auth = {
  isAuthenticated: false,
  authenticate(fakeSync){
    Auth.isAuthenticated = true;
    setTimeout(fakeSync, 100);
  }
}

export default Auth;