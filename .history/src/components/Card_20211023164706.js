import React from "react";
import {useParams } from 'react-router-dom'
import { connect } from 'react-redux'

// import './App.css';

function Card({ cards }) {
const {user} = useParams()
console.log('user', user);
console.log('cards', cards);


  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header"> {user}</h3>
     
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
 let title = ownProps.useParams.user;
 console.log('title', title);
//  return {
//    card: cards.find((card) => {
//      return card.title === title
//  })
// }
}

export default connect(mapStateToProps)(Card);
