import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  }
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
          <LoadingBar color="#f11946" progress={this.state.progress} height={3} />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  title="General - Top Headlines"
                  pageSize={5}
                  country="in"
                  category="general"
                  setProgress={this.setProgress}
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
                      pageSize={5}
                      country="in"
                      category={`${item.toLowerCase()}`}
                      setProgress={this.setProgress}
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
