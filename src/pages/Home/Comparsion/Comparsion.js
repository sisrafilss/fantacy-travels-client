import axios from "axios";
import React, { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const Comparsion = () => {
  const sectionHead = {
    title: "Checkout Blogs Based on User Star Rating",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    axios
      .get("https://whispering-ravine-95668.herokuapp.com/blog-statistics")
      .then((res) => setStatistics(res.data));
  }, []);

  let stars = 5;

  return (
    <div className="container my-5">
      <SectionHead sectionHead={sectionHead} />

      <div className="row g-4">
        {statistics.map((num, index) => (
          <div className="col-md-4 col-sm-12">
            <div
              key={index}
              className="w-100 ps-4  rounded d-flex justify-content-center flex-column align-items-center bg-secondary p-2"
            >
              <p class="text-center lead pt-3">
                <ReactStars
                  count={5}
                  size={24}
                  value={stars - index}
                  edit={false}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="rgb(250, 202, 81)"
                />
              </p>
              <h3 className="d-inline text-light mb-3"> Stars {num} Blogs</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparsion;
