import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const routeItems = [
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
      <Router>
        <LoadingBar color="#f11946" progress={progress} height={3} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                title="General - Top Headlines"
                pageSize={9}
                country="in"
                category="general"
                setProgress={setProgress}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
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
                    pageSize={9}
                    country="in"
                    category={`${item.toLowerCase()}`}
                    setProgress={setProgress}
                  />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
