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
      .then(res => setPeople(res.results.map((people,id)=>({
        name: people.name,
        gender: people.gender,
        eyeColor: people.eye_color,
        hairColor: people.hair_color

      }))))
      // .catch(err => console.log(err));
   }, []);

  //  useEffect(() => {
  //   fetch("https://swapi.co/api/planets")
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  //  }, []);
  return (
    <React.Fragment>
      <div className="rowpapa">
        <h2>
          <font color="white">Characters</font>
        </h2>
      </div>
      <div className="box2 container">
        <div className="row">
          <div className="box1 d-flex flex-col flex-nowrap overflow-auto">
         {people.map((Character,index)=> {
           return (
             <PeopleCards key={index} name={Character.name} gender={Character.gender} hairColor={Character.hairColor} eyeColor={Character.eyeColor}/>
           )
         })}
          </div>
        </div>
      </div>
      <div className="rowpapi">
        <h2>
          <font color="white">Planets</font>
        </h2>
      </div>
      <div className="box2 container">
      <div className="row">
        <div className="box1 d-flex flex-col flex-nowrap overflow-auto">
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
      </div>
      </React.Fragment>
  );
};

export default Home;
