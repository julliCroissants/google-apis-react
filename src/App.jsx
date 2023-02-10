import Consumer from "./Consumer";
import TopBar from "./topbar/TopBar";
import StreetView from "./google/StreetView";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component }  from 'react';

function App() {
  return (
    <>
      <TopBar></TopBar>
      <Router>
        <TopBar></TopBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/map">
            <Consumer />
          </Route>
          <Route path="/streetView">
            <StreetView />
          </Route>
        </Switch>
      </Router>
    </>
    
  );
}

export default App;