import React from "react";
import { Link } from "react-router-dom";

const SingleBlogCol = ({ blog }) => {
  return (
    <div className="col">
      <div className="card shadow border-0">
        <img src={`data:image/jpeg;base64,${blog.thumbnail}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>

          {/* Blog Info */}
          <div className="row mt-3 mb-3 text-center">
            {/* Posted by ... */}
            <div className="col">
              <div>
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                    borderRadius: "50%",
                  }}
                  src={blog.author.photoURL}
                  alt={blog.author.name}
                />
                <span className="text-muted mb-0 ms-3">{blog.author.name}</span>
              </div>
            </div>
            {/* Posted Time */}
            <div className="col">
              <p className="my-0 text-muted">{blog.author.postedOn}</p>
              {/* <p className="my-0 text-muted">20:44:55</p> */}
            </div>
            {/*  */}
          </div>

          <p className="card-text">
            {blog.description[0]}
            <span className="text-primary">[continue reading]</span>
          </p>
          <Link to={`/blogs/${blog._id}`} className="btn btn-success">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};
 
export default SingleBlogCol;
