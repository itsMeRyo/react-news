import React from "react";

function NewsItem(props) {
  const { imageURL, title, description, newsURL } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img className="card-img-top" src={imageURL} alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={newsURL}
            target="_blank"
            className="btn btn-sm btn-primary"
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
