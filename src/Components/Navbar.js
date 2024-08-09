import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    const navBarItems = [
      "Business",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
      "About",
    ];
    return (
      <div style={{ position: "sticky", top: "0px", zIndex: "3" }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navBarItems.map((item, index) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link" to={`/${item.toLowerCase()}`}>
                        {item}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
