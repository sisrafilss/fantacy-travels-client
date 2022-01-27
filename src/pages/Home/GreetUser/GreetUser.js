import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import "./GreetUser.css";
// import icon1 from '../../../images/icons/icon-1.png';
// import icon2 from '../../../images/icons/icon-2.png';
// import icon3 from '../../../images/icons/icon-3.png';

import experienceIcon from "../../../images/exprience-icon.png";

const greetData = [
  {
    iconURL: experienceIcon,
    title: "Share your Travel Experience",
    description:
      "  SThe healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as...",
  },
  {
    iconURL: experienceIcon,
    title: "Share your Travel Experience",
    description:
      "  SThe healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as...",
  },
  {
    iconURL: experienceIcon,
    title: "Share your Travel Experience",
    description:
      "  SThe healthcare workforce comprises a wide variety of professions and occupations who provide some type of healthcare service, including such direct care practitioners as...",
  },
];

const GreetUser = () => {
  const sectionHead = {
    title: "Welcome to Fantacy Travels",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  return (
    <div>
      <SectionHead sectionHead={sectionHead} />
      <div>
        <div className="container greeting-container">
          <div className="row">
            {greetData.map((greet, index) => (
              <div key={index} className="col-md-4 col-sm-12 single-item">
                <div className="d-flex justify-content-center align-items-center flex-column text-center">
                  <div className="mb-4">
                    <img
                      src={greet.iconURL}
                      className="img-fluid"
                      style={{ height: "80px", width: "80px" }}
                      alt=""
                    />
                  </div>
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="text-dark">{greet.title}</h3>
                    <p className="card-description px-3 my-3">
                      {greet.description}
                    </p>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetUser;
