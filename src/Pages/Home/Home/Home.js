import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Info from "../../Info/Info";
import Banner from "../Banner/Banner";
import Ratting from "../Ratting/Ratting";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div>
      <HelmetProvider>
        <title>Travel Tour</title>
      </HelmetProvider>
      <Banner />
      <Services />
      <Info />
      <Ratting />
    </div>
  );
};

export default Home;
