import React from "react";
import { Link } from 'react-router-dom'
// import './App.css';

function Contact(props) {
    console.log(props);
  return (
      <>
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <Link to='/alex' className="ui header"> Alex</Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus
        aut quam excepturi eum provident omnis, est, eaque iusto ab dolore
        dolores aliquam inventore neque deleniti vitae qui ut voluptatum.
      </p>
    </div>
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <Link to='/jo' className="ui header"> Jo</Link>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus
        aut quam excepturi eum provident omnis, est, eaque iusto ab dolore
        dolores aliquam inventore neque deleniti vitae qui ut voluptatum.
      </p>
    </div>
    </>
  );
}

export default Contact;
