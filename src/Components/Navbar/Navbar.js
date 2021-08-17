import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import authentication from "../authentication";

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-capitalize">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
             Cinema NOXE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/movies">
                    movies
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tv">
                    tv
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex ml-auto">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              {authentication.isAuthenticated() ? (
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      logout
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                      login
                    </NavLink>
                  </li>
                </ul>
               
                
              )}
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
