import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const NavBar = (props) => {
    console.log('navbar',props);
  return (
    <nav className="ui raised very padded segment">
      <a className="ui teal inverted segment">Gloria</a>
      <div className="ui right floated header">
        <button className="ui button">
          <Link to="/">Home</Link>
        </button>
        <button className="ui button">
          <Link to="/About">About</Link>
        </button>
        <button className="ui button">
          <Link to="/Contact">Contact</Link>
        </button>
      </div>
    </nav>
  );
};
export default withRouter(NavBar);
