import React from "react";

const NavBar = () => {
  return (
    <div className="weird">
      <nav className="navbar navbar-dark bg-secondary ">
        <a className="navbar-brand">
        <img src="https://img.icons8.com/color/100/000000/star-wars.png"/>
        </a>
        <div className="dropdown pr-3">
          <button
            className="btn btn-primary dropdown-toggle "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favorites
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
