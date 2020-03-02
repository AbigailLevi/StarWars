import React from "react";
import PropTypes from "prop-types"

const PeopleCards = props => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://specials-images.forbesimg.com/imageserve/5e19c8a3e688bf0006f645ea/960x0.jpg?fit=scale"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" >
              
  <h5 className="card-title"> {props.name} </h5>
              <div className="card-text">
                <p>Gender: {props.gender}</p>
                <p>Eye Color: {props.eyeColor}</p>
                <p>Hair Color: {props.hairColor}</p>
              </div>
              <a href="#" className="btn btn-primary">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// PeopleCards.proptypes={
//   PeopleCards:PropTypes.object.isRequired
// }

export default PeopleCards;
