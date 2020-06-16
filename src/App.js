import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import {HashRouter, Switch, Route} from "react-router-dom";
import UsersPage from './pages/UsersPage';
import GroupsPage from './pages/GroupsPage';
import ReactPlayer from 'react-player'
import EventPage from './pages/EventPage';

// #/users
// #/groups
function App() {
  return <HashRouter>
  <Navbar />
  
  <main className="container">
    <Switch>
      <Route path="/users" component={UsersPage} />
      <Route path="/event" component={EventPage} />
      <Route path="/groups" component={GroupsPage} />
      <Route path="/" component={HomePage} />
      
    </Switch>
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  </main>


  </HashRouter>
}

export default App;
