import React from "react";
import "./HelpfulLinks.css";

const homePageUrl = "https://fantacy-travels.netlify.app/";

const HelpfulLinks = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3">Helpful Links</h4>
      <div className="helpful-links">
        <li className="mb-1">
          <a href={homePageUrl}>Cycling vs Running</a>
        </li>
        <li className="mb-1">
          <a href={homePageUrl}>Importance of Cycling</a>
        </li>
        <li className="mb-1">
          <a href={homePageUrl}>How Cycling impact your Fitness</a>
        </li>
        <li className="mb-1">
          <a href={homePageUrl}>Cycling vs Running</a>
        </li>
        <li className="mb-1">
          <a href={homePageUrl}>Importance of Cycling</a>
        </li>
        <li className="mb-1">
          <a href={homePageUrl}>How Cycling impact your Fitness</a>
        </li>{" "}
        <li className="mb-1">
          <a href={homePageUrl}>Cycling vs Running</a>
        </li>
      </div>
    </div>
  );
};

export default HelpfulLinks;
