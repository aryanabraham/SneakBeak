import React from "react";
import Announcements from "../components/Announcements";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Bot from "../components/Chatbot.jsx";
import ProgressBar from "react-scroll-progress-bar";

const Home = () => {
  return (
    <div>
      <ProgressBar height="7px" duration="0.2"/>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Bot />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
