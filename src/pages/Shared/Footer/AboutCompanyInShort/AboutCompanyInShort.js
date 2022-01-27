import React from "react";
import "./AboutCompanyInShort.css";

const homePageUrl = "https://fantacy-travels.netlify.app/";

const AboutCompanyInShort = () => {
  return (
    <div>
      <h4 className="my-4 text-light">About Fantacy Travels</h4>
      <p className="pe-4">
        Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere.
        Praesent justo dui laoreet dignissim lectus etiam ipsum habitant
        tristique
      </p>
      <div className="pe-4">
        <p className="my-0 pb-1">
          <i className="fas fa-map-marker-alt footer-icon"></i> &nbsp; Plot . 38
          St. 39 UpHill Town, Newyork, USA
        </p>
        <p className="my-0 pb-1">
          <i className="fas fa-phone-volume footer-icon"></i> &nbsp; +522 234
          56789 / +522 234 56780
        </p>
        <p className="my-0 pb-1">
          <a className="copany-contact" href={homePageUrl}>
            <i className="fas fa-envelope-open footer-icon"></i> &nbsp;
            info@fantacy-travels.com
          </a>
        </p>
        <p className="my-0 pb-1">
          <a className="copany-contact" href={homePageUrl}>
            <i className="fas fa-globe footer-icon"></i> &nbsp;
            www.fantacy-travels.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutCompanyInShort;
