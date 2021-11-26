import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const location = useLocation();

  return (
    <div
      style={{
        borderTopLeftRadius:
          (location.pathname === "/home" || location.pathname === "/") &&
          "150px",
      }}
      className="bg-black p-5 "
    >
      <Container>
        <Row>
          <Col>
            <div className="border-start ps-3 border-warning text-white my-2 border-2">
              <p>Call us</p>
              <h3 className="text-primary">+880 1900001123</h3>
            </div>
            <div className="border-start ps-3 border-warning text-white my-2 border-2">
              <p>Email for us</p>
              <h3 className="text-primary">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:tour@travel.com"
                >
                  tour@travel.com
                </a>
              </h3>
            </div>
            <div className="border-start ps-3 border-warning text-white my-2 border-2">
              <p>Follow us</p>
              <button className="bg-transparent border-0">
                <FontAwesomeIcon
                  className="fs-3 text-white"
                  icon={faFacebook}
                ></FontAwesomeIcon>
              </button>
              <button className="bg-transparent border-0">
                <FontAwesomeIcon
                  className="fs-3 text-white"
                  icon={faInstagram}
                ></FontAwesomeIcon>
              </button>
              <button className="bg-transparent border-0">
                <FontAwesomeIcon
                  className="fs-3 text-white"
                  icon={faTwitter}
                ></FontAwesomeIcon>
              </button>
            </div>
          </Col>
          <Col className="d-flex flex-column ">
            <Link className="text-decoration-none my-3" to="/commingSoon">
              About Us
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Community Blog
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Rewards
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Meet the Team
            </Link>
          </Col>
          <Col className="d-flex flex-column ">
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Account
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Legal
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Contact
            </Link>
            <Link className="text-decoration-none my-3" to="/commingSoon">
              Privacy Policy
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="mt-5">
        <p>
          <small>Copyright &copy; 2021 by Travel Tour</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;
