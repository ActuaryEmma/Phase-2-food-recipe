import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const NavBar = () => {
  return (
    <nav className=" navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" style={{ marginLeft: `${100}px` }}>
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          NYAKIO KITCHEN
        </div>

        <ul className="nav justify-content-center">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/addrecipe">
              Add Recipe
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/dessertcontainer">
            Dessert Container
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
