import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { CalorieTracker } from './components/Charts/CalorieTracker';
import { UserContext } from './components/UserDataContext';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage';
import './Routes.css'


export const Routes: React.FC = () => {
  interface UserInformation {
    user_name: string,
    response: Response
  };
  const [name, setName] = useState("")
  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/api/user/dashboard",
        {
          method: "GET",
          headers: { token: localStorage.token }
        });
      const parseRes: UserInformation = await response.json();
      setName(parseRes.user_name)
    } catch (err) {
      console.log(err.message)
    }
  };
  useEffect(() => {
    getName()
  }, []);


  const [isAuthenticated, setIsAuthenticated] = useState(false)
  //function that is passed via props to login and registration pages

  const setAuth = (boolean: React.SetStateAction<boolean>) => {
    setIsAuthenticated(boolean)
  }
  //verifies jwt token and confirms authentication via is-verify route from nodejs
  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/api/auth/is-verified",
        {
          method: "GET",
          headers: { token: localStorage.token }
        });

      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.log(err.message)
    }
  };
  //checks authentication every page load so you stay logged in on page refresh
  useEffect(() => {
    isAuth();
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <UserContext.Provider value={name}>
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/dashboard1" component={Dashboard} />
            <Route exact path="/calories" component={CalorieTracker} />
            {/*while in dashboard, if authenticated, render the dashboard for the user, if not auth, rediret to login*/}
            {/* <Route exact path="/dashboard" render={props => isAuthenticated ? (
            <Dashboard {...props} setAuth={setAuth} />) : (
              <Redirect to="/login" />)} /> */}

            {/*while in login, if not authenticated, render the login page for the user, if not auth, rediret to the dashboard*/}
            <Route exact path="/login" render={props => !isAuthenticated ? (
              <LoginPage {...props} setAuth={setAuth} />) : (
                <Redirect to="/dashboard" />)} />
          </UserContext.Provider>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}