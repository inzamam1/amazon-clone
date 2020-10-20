import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*react-routes-route to pages without refreshing,it is must faster
pages in format---localhost:3000/login*/
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Router path="/login">
            <h1>login</h1>
          </Router>
          <Route path="/">
            <h1>Home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
//switch is used to map pages
//whats the difference between route and router
export default App;
