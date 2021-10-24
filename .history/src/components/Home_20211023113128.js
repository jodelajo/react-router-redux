import React from "react";
// import './App.css';

function Home(props) {
  console.log(props);
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header"> Home</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias natus
        aut quam excepturi eum provident omnis, est, eaque iusto ab dolore
        dolores aliquam inventore neque deleniti vitae qui ut voluptatum.
      </p>
    </div>
  );
}

export default Home;
