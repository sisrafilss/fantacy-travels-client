import React from "react";

import tajmahal from "../../images/tajmahal.jpg";
import israfil from "../../images/Israfil-Hossen-Image.jpg";
import SectionHead from "../Shared/SectionHead/SectionHead";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer/Footer";
import SingleBlogCol from "../Shared/SingleBlogCol/SingleBlogCol";

const topBlogs = [
  {
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
      date: "12 December 2021",
      location: "Agra, India",
      expence: "1500",
      rating: 5,
    },
  },
  {
    _id: 2,
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
    _id: 3,
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
    _id: 4,
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
    _id: 5,
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
    _id: 6,
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
    _id: 7,
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
    _id: 8,
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
    _id: 9,
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
    _id: 10,
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

const Blogs = () => {
  const sectionHead = {
    title: "Checkout Others Experience",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit harum commodi enim nemo!",
  };

  return (
    <>
      <Navigation />
      <SectionHead sectionHead={sectionHead} />
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {topBlogs.map((blog) => (
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
