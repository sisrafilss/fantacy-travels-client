import React, { useEffect, useState } from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { Link } from "react-router-dom";
import SingleBlogCol from "../../Shared/SingleBlogCol/SingleBlogCol";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const TopBlogs = () => {
  const [topBlogs, setTopBlogs] = useState([]);
  const { isLoading, setIsLoading } = useAuth();

  const sectionHead = {
    title: "Checkout Others Experience",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  // Get Top Blogs from DB
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:5000/top-blogs").then((res) => {
      setIsLoading(false);
      setTopBlogs(res.data);
    });
  }, [setIsLoading]);

  return (
    <div>
      <SectionHead sectionHead={sectionHead} />

      {/* Display Loading Spinner till data loads */}
      {isLoading && <LoadingSpinner />}

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
