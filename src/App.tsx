import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { MainPage, NotFound, AuthPage, AddNewTaskPage } from './pages';
import { Header, ProtectedRouter } from './components';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './redux/rsf';


function App() {
  const [user] = useAuthState(auth)
  React.useEffect(() => { }, [user])
  return (
    <div className="App" >
      <Header />
      <Switch>
        <ProtectedRouter exact path="/" component={MainPage} />
        <Route exact path="/login" component={AuthPage} />
        <ProtectedRouter exact path="/AddNewTask" component={AddNewTaskPage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div >
  );
}
export default App;
