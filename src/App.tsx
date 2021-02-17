import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import AuthPage from './pages/AuthPage';
import { useSelector, useDispatch } from 'react-redux';
import AddNewEventPage from './pages/AddNewTaskPage';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './redux/rsf';

function App() {
  const isAuth = useSelector<any, any>(state => state.authReducer.isAuth);
  console.log(isAuth)
  const [user] = useAuthState(auth)
  console.log("APP USER object:", user, !!user)
  //const dispatch = useDispatch();
  React.useEffect(() => { }, [user])
  return (
    <div className="App" >
      <Header />
      <Switch>
        <Route exact path="/login" component={AuthPage} />
        {user ? (
          <>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/AddNewTask" component={AddNewEventPage} />
            <Route path="/NotFound" component={NotFound} />

          </>) : (<Redirect to="/login" />)}

      </Switch>
    </div >
  );
}

export default App;
