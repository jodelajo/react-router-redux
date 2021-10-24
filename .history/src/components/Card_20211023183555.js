import React, {useState} from "react";
import {useParams } from 'react-router-dom'
import { connect } from 'react-redux'

// import './App.css';

function Card( cards ) {

  // const [singleCard, setSingleCard] = useState()
// const {user} = useParams()
// console.log('user', user);
console.log(cards);


  return (
    <>
  { cards.map((card) => {
    return(
      <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
      key = {card.id}
    >
      <h3 className="ui header"> {card.title}</h3>
      <p>
       {card.body}
      </p>
    </div>
    )
  })}

  </>
  );
}
const MapStateToProps = (state, cards) => {
  console.log('cards', cards);
  const {user} = useParams()
 let title = user;
 console.log('title', title);
 return {
   card: state.cards.find((card) => {
     return card.title === title;
 })
}
}

export default connect(MapStateToProps)(Card);
