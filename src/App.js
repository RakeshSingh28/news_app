import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    const routeItems = [
      "Business",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ];
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News
                  key="general"
                  title="General - Top Headlines"
                  pageSize={10}
                  country="in"
                  category="general"
                />
              }
            />
            {routeItems.map((item, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`/${item.toLowerCase()}`}
                  element={
                    <News
                      key={`${item.toLowerCase()}`}
                      title={`${item} - Top Headlines`}
                      pageSize={10}
                      country="in"
                      category={`${item.toLowerCase()}`}
                    />
                  }
                />
              );
            })}
          </Routes>
        </Router>
      </div>
    );
  }
}
