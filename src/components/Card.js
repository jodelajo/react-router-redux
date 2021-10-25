import React, {useEffect} from "react";
import { connect } from "react-redux";
import { deleteCard, fetchUsers } from "../actions/cardActions";

function Card(props) {
  const { id } = props.card;
  const { users, fetchUsers, deleteCard, history } = props
  console.log(users);


  useEffect(() => {
    fetchUsers()
  },[])

  function onButtonClick() {
    deleteCard(id);
    history.push("/contact");
  }

  return users.map((user) => {
return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
      key={user.id}
    >
      <h3 className="ui header"> {user.name}</h3>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <button
        className="ui primary right floated button"
        onClick={onButtonClick}
      >
        Delete
      </button>
    </div>
  );
  })

  
}

const mapStateToProps = (state, ownProps) => {
  let title = ownProps.match.params.user;
  return {
    card: state.cards.find((card) => {
      return card.title === title
      
    }),
    users: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
