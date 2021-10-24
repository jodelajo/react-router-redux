import React from "react";
import {useParams } from 'react-router-dom'
import { connect } from 'react-redux'

// import './App.css';

function Card({ cards }) {
// const {user} = useParams()
// console.log('user', user);
// console.log(cards);
const { title, body} = this.card;

  return (
    
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header"> {title}</h3>
      <p>{ body }</p>
     
    </div>
  );
}
const MapStateToProps = (state, cards) => {
  console.log('cards', cards);
  const {user} = useParams()
 let title = user;
 console.log('title', title);
 return {
   card: state.cards.find((card) => {
     return card.title === title
 })
}
}

export default connect(MapStateToProps)(Card);
