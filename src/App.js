import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Landing from "./landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*react-routes-route to pages without refreshing,it is must faster
pages in format---localhost:3000/login*/
function App() {
  return (
    <Router>
      {/*higher order component */}
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route path="/">
            <Landing />
            {/*loads navbar component from Header file */}
            {/*Directs to Home component  */}
          </Route>
        </Switch>
      </div>
      <div>
        <h1>j</h1>
      </div>
    </Router>
  );
}
//switch is used to map pages
//whats the difference between route and router
export default App;
