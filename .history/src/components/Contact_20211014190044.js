import React from "react";
import { Link } from 'react-router-dom'
import Modal from "./Modal";
import { connect } from 'react-redux'
// import './App.css';

function Contact(props) {
    console.log('contact', props.cards);
  return (
      <>
      <Modal />
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}
export default connect(mapStateToProps)(Contact);
