import React from "react";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, time, source } = props;
  return (
    <div className="my-2">
      <span
        className="position-relative start-50 translate-middle badge rounded-pill bg-danger"
        style={{ zIndex: "1", top: "22px" }}
      >
        {source}
      </span>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">
            By {!author ? "Unknown" : author} on {new Date(time).toGMTString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
