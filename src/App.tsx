import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Main, NotFound, Auth, AddNewTask } from './pages';
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
        <ProtectedRouter exact path="/" component={Main} />
        <Route exact path="/login" component={Auth} />
        <ProtectedRouter exact path="/AddNewTask" component={AddNewTask} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div >
  );
}
export default App;
