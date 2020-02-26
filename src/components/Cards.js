import React from "react";

const Cards = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <img src="https://specials-images.forbesimg.com/imageserve/5e19c8a3e688bf0006f645ea/960x0.jpg?fit=scale" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
