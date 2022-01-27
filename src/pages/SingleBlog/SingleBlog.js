import React, { useEffect, useState } from "react";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import ReactStars from "react-rating-stars-component";
import SingleBlogCol from "../Shared/SingleBlogCol/SingleBlogCol";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const SingleBlog = () => {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // Load specific blog from DB
  useEffect(() => {
    setLoading(true);
    axios.get(`https://whispering-ravine-95668.herokuapp.com/blogs/${id}`).then((res) => {
      setBlog(res.data);
      setLoading(false);
    });
  }, [setLoading, id]);

  console.log(blog);

  return (
    <div>
      <Navigation />

      {/* Display Loading Spinner till data loads */}
      {loading && <LoadingSpinner />}

      {blog?.title && (
        <div className="container my-5">
          <div className="row g-5">
            {/* Main Blog */}
            <div className="col-md-8 col-sm-12">
              <div className="mb-4">
                <h2 className="display-6">{blog?.title}</h2>
              </div>
              <div>
                <img
                  className="img-fluid"
                  src={`data:image/jpeg;base64,${blog?.thumbnail}`}
                  alt=""
                />
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
                      src={blog?.author?.photoURL}
                      alt={blog?.author?.name}
                    />
                    <span className="text-muted mb-0 ms-3">
                      {blog?.author?.name}
                    </span>
                  </div>
                </div>
                {/* Posted Time */}
                <div className="col">
                  <p className="my-0 text-muted">
                    {" "}
                    <span className="me-2">Posted On: </span>{" "}
                    {blog?.author?.postedOn}
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
                          {blog?.travelInfo?.location}
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
                          {blog?.travelInfo?.date}
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
                          {blog?.travelInfo?.expence}
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
                          value={blog?.travelInfo?.rating}
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
                {blog?.description?.map((p, index) => (
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
      )}

      <Footer />
    </div>
  );
};

export default SingleBlog;
