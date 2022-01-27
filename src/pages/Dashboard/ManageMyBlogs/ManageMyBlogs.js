import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const ManageMyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  // Load all orders from Server
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://whispering-ravine-95668.herokuapp.com/all-blogs?email=${user.email}`)
      .then((res) => {
        setLoading(false);
        setBlogs(res.data);
      });
  }, [setLoading, user.email]);

  const handleDeleteBlog = (id) => {
    const proceed = window.confirm("Are you sure, want to delete?");
    if (proceed) {
      axios.delete(`https://whispering-ravine-95668.herokuapp.com/blogs/${id}`).then((res) => {
        if (res.data.deletedCount > 0) {
          alert("Deleted Successfully!");
          const remainingBlogs = blogs.filter((ordr) => ordr._id !== id);
          setBlogs(remainingBlogs);
        }
      });
    }
  };

  return (
    <div className="container py-4">
      <div className="orders-container">
        {/* <h1 className={orders.length && "hidden"}>There is no Order Yet!</h1> */}

        {/* Display Loading Spinner till data loads */}
        {loading && <LoadingSpinner />}

        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Posted At</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td> {blog?.title} </td>
                  <td> {blog?.author.postedOn} </td>
                  <td> {blog?.publish} </td>
                  <td>
                    <button
                      onClick={() => handleDeleteBlog(blog?._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageMyBlogs;
