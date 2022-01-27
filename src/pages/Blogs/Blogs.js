import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionHead from "../Shared/SectionHead/SectionHead";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer/Footer";
import SingleBlogCol from "../Shared/SingleBlogCol/SingleBlogCol";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const sectionHead = {
    title: "Checkout Others Experience",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  // Get Blogs from DB
  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:5000/blogs").then((res) => {
      setLoading(false);
      setBlogs(res.data);
    });
  }, []);

  return (
    <>
      <Navigation />
      <SectionHead sectionHead={sectionHead} />

      {/* Display Loading Spinner till data loads */}
      {loading && <LoadingSpinner />}

      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogs.map((blog) => (
            <SingleBlogCol key={blog._id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-5">
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <span className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo; Previous</span>
                </span>
              </li>
              <li className="page-item">
                <span className="page-link" style={style.activePage}>
                  1
                </span>
              </li>
              <li className="page-item">
                <span className="page-link">2</span>
              </li>
              <li className="page-item">
                <span className="page-link">3</span>
              </li>
              <li className="page-item">
                <span className="page-link" aria-label="Next">
                  <span aria-hidden="true">Next &raquo;</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;

const style = {
  activePage: {
    background: "green",
    color: "#fff",
  },
};
