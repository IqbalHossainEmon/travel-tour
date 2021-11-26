import React from "react";
import { HelmetProvider } from "react-helmet-async";

const CommingSoon = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/Bwp1kJY/Comming-Soon.png)",
      }}
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <HelmetProvider>
        <title>Comming Soon</title>
      </HelmetProvider>
      <div className="text-center">
        <h1 className="fs-1">Opps..</h1>
        <h1>Page Comming Soon...</h1>
      </div>
    </div>
  );
};

export default CommingSoon;
