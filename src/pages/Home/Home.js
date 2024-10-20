import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Exploremenu from "../../Components/Exploremenu/Exploremenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

const Home = () => {
  return (
    <div>
      <Header />
      <Exploremenu />
      <FoodDisplay />
      <AppDownload />
    </div>
  );
};

export default Home;
