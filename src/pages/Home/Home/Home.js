import React from "react";
import Footer from "../../Shared/Footer/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import GreetUser from "../GreetUser/GreetUser";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <GreetUser />
      <Footer />
    </>
  );
};

export default Home;
