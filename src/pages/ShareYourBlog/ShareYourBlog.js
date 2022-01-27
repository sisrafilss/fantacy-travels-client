import React from "react";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

import oops from "../../images/oops.png";
import { Link } from "react-router-dom";

const ShareYourBlog = () => {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="text-center">
          <img
            className="img-fluid"
            style={{ height: "256px", width: "256px" }}
            src={oops}
            alt=""
          />
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <div>
            <h3 className="display-5 text-center" style={{ maxWidth: "800px" }}>
              You have't Login Yet! Please Login to Share Your Travel Experience
              from Dashboard!
            </h3>
            <div className="text-center">
              <Link to="/login" className="btn btn-primary btn-lg mt-4 mb-5">
                Go Login Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShareYourBlog;
