import React from 'react'
import {useState} from "react";
import "./App.css";
import Header from "./Header";
import Tindercards from "./Tindercards"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SwipeButtons from "./SwipeButtons"
import Chats from './Chats';
import ChatScreen from "./ChatScreen"
import Login from './Login';
import { useStateValue } from './StateProvider';
import ProfileScreen from "./ProfileScreen"


 function App() {

const [{user}, dispatch]=useStateValue();

  return (

    
    <div className="App">
      {!user ?(
      <Login/>
    ):(
      <div className="appBody">
      <Router>
 
      <Route exact path="/profile">
        
        <ProfileScreen/>
      </Route>

      <Route exact path="/chats/:person">
      <Header backButton="/chats"/>
        <ChatScreen/>
      </Route>

      <Route exact path="/chats">
      <Header backButton="/"/>
        <Chats/>
      </Route>

      <Switch>
        <Route exact path="/"  >
        <Header/>
          <Tindercards/>
        <SwipeButtons />
        </Route>
      </Switch>


      </Router>
      </div>

    )}
    
    </div>
  )
}

export default App;
