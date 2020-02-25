import React from "react";
import '../src/App.css'
import NavBar from "./components/Navbar";
import Home from "./components/Home"


const App = () => {
  return (
    <div>
      <React.Fragment>
        <NavBar />
        <Home />
        
      </React.Fragment>
      
    </div>
  );
};

export default App;
