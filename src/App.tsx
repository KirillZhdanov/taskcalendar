import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const isAuth = useSelector<any, any>(state => state.authReducer.isAuth);
  console.log(isAuth)
  //const dispatch = useDispatch();
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route exact path="/login" component={AuthPage} />
        {localStorage.getItem("isAuth") || isAuth ? (
          <>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/NotFound" component={NotFound} />
          </>) : (<Redirect to="/login" />)}

      </Switch>
    </div >
  );
}

export default App;
