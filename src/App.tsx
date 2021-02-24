import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Main, NotFound, Auth, AddNewTask } from './pages';
import { Header, ProtectedRouter } from './components';


function App() {
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
