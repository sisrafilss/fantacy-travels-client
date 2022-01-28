import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Comparsion from "../Comparsion/Comparsion";
import GreetUser from "../GreetUser/GreetUser";
import TopBlogs from "../TopBlogs/TopBlogs";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <GreetUser />
      <TopBlogs />
      <Comparsion />
      <Footer />
    </>
  );
};

export default Home;
