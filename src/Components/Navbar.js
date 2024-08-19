import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            alt="icon"
            className="me-1"
            style={{ mixBlendMode: "luminosity" }}
            height={40}
            width={40}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaELOjlZiUW-t2DoNxG1ZHTCG9n6jky5dWg&s"
          />
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
};

export default Navbar;
