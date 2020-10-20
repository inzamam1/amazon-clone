import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
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
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            {/*Directs to Home component  */}
            <Home />
            {/*loads navbar component from Header file */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//switch is used to map pages
//whats the difference between route and router
export default App;
