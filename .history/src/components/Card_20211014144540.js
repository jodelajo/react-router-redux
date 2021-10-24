import React from "react";
import {useParams } from 'react-router-dom'

// import './App.css';

function Card() {
const {user} = useParams()
console.log('user', user);


  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header"> Card</h3>
     
    </div>
  );
}

export default Card;
