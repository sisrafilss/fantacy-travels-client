import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  // Load all orders from Server
  useEffect(() => {
    setLoading(true);
    axios.get(`https://whispering-ravine-95668.herokuapp.com/all-blog`).then((res) => {
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

  // Handle Order Status
  const handlePublish = (id) => {
    axios.put(`https://whispering-ravine-95668.herokuapp.com/blogs/${id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        const updatedBlogs = blogs.find((pd) => pd._id === id);
        const remainingOrders = blogs.filter((pd) => pd._id !== id);
        updatedBlogs.publish = "Published";
        const newOrders = [...remainingOrders, updatedBlogs];
        setBlogs(newOrders);
      }
    });
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
                  <td
                    // onClick={() => handleCancelOrder(order._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Actions
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-dark actions-container"
                        aria-labelledby="dropdownMenuButton2"
                      >
                        <li
                          onClick={() => handlePublish(blog?._id)}
                          className="dropdown-item"
                        >
                          Publish
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li
                          onClick={() => handleDeleteBlog(blog?._id)}
                          className="dropdown-item"
                        >
                          Delete
                        </li>
                      </ul>
                    </div>
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

export default ManageBlogs;
