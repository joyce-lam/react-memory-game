import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-default">
  	<div className="container-fluid">
  		<div className="navbar-header">
  			<div className="navbar-brand">
          <h2>Memory Game</h2>
        </div>
  		</div>
  		<ul className="navbar-nav navbar-right text-center">  
        <li><h3>Score:{props.score}</h3></li>
        <li><h3>Top Score: {props.highestScore}</h3></li>
        </ul>
    </div>
  </nav>
);

export default Navbar;


