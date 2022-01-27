import React from "react";
// import { useParams } from "react-router-dom";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import ReactStars from "react-rating-stars-component";

import tajmahal from "../../images/tajmahal.jpg";
import israfil from "../../images/Israfil-Hossen-Image.jpg";
import SingleBlogCol from "../Shared/SingleBlogCol/SingleBlogCol";

const SingleBlog = () => {
  // const { _id } = useParams();

  const blog = {
    _id: 1,
    title: "Amazing Fantacy of Visiting Tajmahal - India",
    thumbnail: tajmahal,
    author: {
      name: "Israfil Hossen",
      image: israfil,
      postedOn: new Date().toDateString(),
    },
    description: [
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as natural lead-in to",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as natural lead-in to",
      "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as natural lead-in to",
    ],
    travelInfo: {
      date: "12 Dec 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  };

  return (
    <div>
      <Navigation />
      <div className="container my-5">
        <div className="row g-5">
          {/* Main Blog */}
          <div className="col-md-8 col-sm-12">
            <div className="mb-4">
              <h2 className="display-6">{blog.title}</h2>
            </div>
            <div>
              <img className="img-fluid" src={blog.thumbnail} alt="" />
            </div>

            {/* Blog Info */}
            <div className="row mt-3 mb-3 text-center">
              {/* Posted by ... */}
              <div className="col">
                <div>
                  <span className="text-muted me-2">Posted by: </span>
                  <img
                    className="card-img"
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "50%",
                    }}
                    src={blog.author.image}
                    alt={blog.author.name}
                  />
                  <span className="text-muted mb-0 ms-3">
                    {blog.author.name}
                  </span>
                </div>
              </div>
              {/* Posted Time */}
              <div className="col">
                <p className="my-0 text-muted">
                  {" "}
                  <span className="me-2">Posted On: </span>{" "}
                  {blog.author.postedOn} 12:45 PM
                </p>
                {/* <p className="my-0 text-muted">20:44:55</p> */}
              </div>
              {/*  */}
            </div>

            {/* Travel Info */}
            <div class="row my-3 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div class="col">
                <div class="card shadow bg-secondary text-center text-light px-2 py-2">
                  <div class="card-body">
                    <p class="card-text lead">
                      Location:{" "}
                      <span className="fw-bold text-warning">
                        {blog.travelInfo.location}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow bg-secondary text-center text-light px-2 py-2">
                  <div class="card-body">
                    <p class="card-text lead">
                      Date:{" "}
                      <span className=" text-warning">
                        {blog.travelInfo.date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow bg-secondary text-center text-light px-2 py-2">
                  <div class="card-body">
                    <p class="card-text lead">
                      Expense:{" "}
                      <span className="fw-bold text-warning">
                        {blog.travelInfo.expence}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card shadow bg-secondary text-center text-light px-2 py-2">
                  <div class="card-body">
                    <p class="card-text lead">
                      Rating:{" "}
                      <ReactStars
                        count={5}
                        size={24}
                        value={blog.travelInfo.rating}
                        edit={false}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="rgb(250, 202, 81)"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              {blog.description.map((p, index) => (
                <p key={index} className="lead">
                  {p}
                </p>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-md-4 col-sm-12">
            <div className="mt-5 mb-4 text-center">
              <h2 className="display-6">Related Blogs</h2>
            </div>
            <div className="row row-cols-1 g-4">
              <SingleBlogCol blog={blog} />
              <SingleBlogCol blog={blog} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlog;
