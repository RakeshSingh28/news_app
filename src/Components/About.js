import React, { useEffect } from "react";

let pageTitle = document.title;
const About = () => {
  useEffect(() => {
    document.title = `About | ${pageTitle}`;
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="mt-2">About NewsMonkey</h1>
          <img
            alt="icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaELOjlZiUW-t2DoNxG1ZHTCG9n6jky5dWg&s"
          />
          <p className="lead mt-4">
            Welcome to{" "}
            <a href="/" className="text-decoration-none">
              <b className="text-danger">NewsMonkey</b>
            </a>
            , your one-stop destination for the latest and greatest news from
            around the world.
          </p>
          <p className="text-muted">
            At NewsMonkey, we believe in delivering news that is timely,
            accurate, and easy to digest. Our platform aggregates news from
            various reliable sources to ensure you stay informed on the topics
            that matter most to you.
          </p>

          <h3 className="mt-5">Features</h3>
          <ul className="list-unstyled mt-3">
            <li className="my-3">
              <i className="bi bi-check-circle-fill text-primary"></i> Real-time
              news updates
            </li>
            <li className="my-3">
              <i className="bi bi-check-circle-fill text-primary"></i>{" "}
              Customizable news categories
            </li>
            <li className="my-3">
              <i className="bi bi-check-circle-fill text-primary"></i>{" "}
              Easy-to-use interface
            </li>
            <li className="my-3">
              <i className="bi bi-check-circle-fill text-primary"></i> News from
              trusted sources
            </li>
          </ul>

          <p className="mt-4">
            Our mission is to keep you informed and engaged with the world
            around you. Whether you're interested in business, entertainment,
            sports, or technology, NewsMonkey has something for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
