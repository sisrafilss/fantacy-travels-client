import React, { useEffect, useState } from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { Link } from "react-router-dom";
import SingleBlogCol from "../../Shared/SingleBlogCol/SingleBlogCol";
import axios from "axios";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const TopBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const sectionHead = {
    title: "Checkout Others Experience",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  // Get Top Blogs from DB
  useEffect(() => {
    setLoading(true);
    axios.get("https://whispering-ravine-95668.herokuapp.com/top-blogs").then((res) => {
      setLoading(false);
      setTopBlogs(res.data);
    });
  }, [setLoading]);

  return (
    <div>
      <SectionHead sectionHead={sectionHead} />

      {/* Display Loading Spinner till data loads */}
      {loading && <LoadingSpinner />}

      <div className="container my-5">
        {/* Blog Rows */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {topBlogs.map((blog) => (
            <SingleBlogCol key={blog._id} blog={blog} />
          ))}
        </div>

        <div className="my-5 d-grid">
          <Link className="btn btn-load-more" to="/blogs">
            All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBlogs;
