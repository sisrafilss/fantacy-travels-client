import React from "react";
import "./HelpfulLinks.css";

const homePageUrl = "https://fantacy-travels.netlify.app/";

const helpfulLinks = [
  {
    name: "Helpful Link 1",
    url: homePageUrl,
  },
  {
    name: "Helpful Link 2",
    url: homePageUrl,
  },
  {
    name: "Helpful Link 3",
    url: homePageUrl,
  },
  {
    name: "Helpful Link 4",
    url: homePageUrl,
  },
  {
    name: "Helpful Link 5",
    url: homePageUrl,
  },
  {
    name: "Helpful Link 6",
    url: homePageUrl,
  },
];

const HelpfulLinks = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3">Helpful Links</h4>
      <div className="helpful-links">
        {helpfulLinks.map((link, index) => (
          <li key={index} className="mb-1">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default HelpfulLinks;
