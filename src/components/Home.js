import React, { useState, useEffect } from "react";
import PeopleCards from "../components/PeopleCards";
import PlanetsCards from "../components/PlanetsCards";
import People from "./PeopleCards";

const Home = () => {
  const [details, setDetails] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://swapi.co/api/people")
      .then(res => res.json())
      .then(res => setPeople(res.Result.map((people,id)=>({
        name: people.name
      }))))
      .catch(err => console.log(err));
   }, []);

   useEffect(() => {
    fetch("https://swapi.co/api/planets")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
   }, []);
  return (
    <React.Fragment>
      <div className="rowpapa">
        <h2>
          <font color="white">Characters</font>
        </h2>
      </div>
      <div className="column box1">
        <div className="row">
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />
          <PeopleCards />

        </div>
      </div>
      <div className="rowpapi">
        <h2>
          <font color="white">Planets</font>
        </h2>
      </div>
      <div className="column box1">
        <div className="row">
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
          <PlanetsCards />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
