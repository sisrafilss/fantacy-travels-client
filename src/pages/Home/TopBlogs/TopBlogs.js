import React from "react";
import SectionHead from "../../Shared/SectionHead/SectionHead";

import tajmahal from "../../../images/tajmahal.jpg";
import israfil from "../../../images/Israfil-Hossen-Image.jpg";
import { Link } from "react-router-dom";

const topBlogs = [
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
];

const TopBlogs = () => {
  const sectionHead = {
    title: "Checkout Others Experience",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  return (
    <div>
      <SectionHead sectionHead={sectionHead} />
      <div className="container my-5">
        {/* Blog Rows */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {topBlogs.map((blog, index) => (
            <div key={index} className="col">
              <div className="card shadow">
                <img src={blog.thumbnail} className="card-img-top" alt="..." />
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
                      <p className="my-0 text-muted">{blog.author.postedOn}</p>
                      {/* <p className="my-0 text-muted">20:44:55</p> */}
                    </div>
                    {/*  */}
                  </div>

                  <p className="card-text">
                    {blog.description[0]}
                    <span className="text-primary">[continue reading]</span>
                  </p>
                  <button className="btn btn-success">Detail</button>
                </div>
              </div>
            </div>
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
