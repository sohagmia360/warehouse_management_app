import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Inventory from "../components/Invertory/Inventory";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Inventory />
      <Footer />
    </>
  );
};

export default Home;
