import React from "react";
import Cards from "../components/Cards";
import People from "./People";

const Home = () => {
  return (
    <React.Fragment>
        <div className="rowpapa">
          <h2>
            <font color="white">Characters</font>
          </h2>
        </div>
        <div className="column box1">
          <div className="row">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="row">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="rowpapi">
          <h2>
            <font color="white">Planets</font>
          </h2>
        </div>
        <div className="column box1">
          <div className="row">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div className="row">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </React.Fragment>
  );
};

export default Home;
