import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Notes App
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Notes</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/create">Create Note</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/user">Create User</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
