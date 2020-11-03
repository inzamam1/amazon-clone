import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./landing.css";
function landing() {
  return (
    <div className="landing_main">
      <Link to="/home">
        <h1>hello</h1>
      </Link>
      <div className="landing_column1">
        <h1>hey</h1>
      </div>
      <div className="landing_column2">
        <h1>hii</h1>
      </div>
    </div>
  );
}

export default landing;
