import React from "react";
import { HelmetProvider } from "react-helmet-async";

const NotFound = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://i.ibb.co/DGjpNT0/NotFound.png)" }}
      className="vh-100 d-flex justify-content-center align-items-center"
    >
      <HelmetProvider>
        <title>NotFOund</title>
      </HelmetProvider>
      <div className="text-center text-white">
        <h1 className="fs-1">404</h1>
        <h1>Page not found</h1>
      </div>
    </div>
  );
};

export default NotFound;
