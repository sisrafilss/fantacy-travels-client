import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import GreetUser from "../GreetUser/GreetUser";
import TopBlogs from "../TopBlogs/TopBlogs";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <GreetUser />
      <TopBlogs />
      <Footer />
    </>
  );
};

export default Home;
