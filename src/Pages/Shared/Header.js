import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logout } = useAuth();
  const navStyle = {
    color: "yellow",
  };
  const location = useLocation();
  return (
    <Navbar
      expand="md"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.349)" }}
      fixed="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "orange" }}
          className="fs-2"
          as={Link}
          to="/"
        >
          Travel Tour
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              style={{
                color:
                  location.pathname === "/" || location.pathname === "/home"
                    ? "yellow"
                    : "orange ",
              }}
              as={Link}
              to="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "orange" }}
              activeStyle={navStyle}
              as={NavLink}
              to="/ManageOrders"
            >
              Manage Orders
            </Nav.Link>
            {user.email ? (
              <div className="d-lg-flex justify-content-center text-center align-items-center">
                <Nav.Link
                  style={{ color: "orange" }}
                  activeStyle={navStyle}
                  as={NavLink}
                  to="/myOrder"
                >
                  My Orders
                </Nav.Link>
                <Nav.Link
                  style={{ color: "orange" }}
                  activeStyle={navStyle}
                  as={NavLink}
                  to="/addNewService"
                >
                  Add a new Service
                </Nav.Link>
                <Nav.Link as={NavLink} to="/commingSoon">
                  <img
                    style={{ height: "40px" }}
                    className="rounded-circle"
                    src={user.photoURL}
                    alt=""
                  />
                </Nav.Link>
                <button
                  onClick={logout}
                  className="border-0 ms-1 bg-transparent"
                >
                  <FontAwesomeIcon
                    className="text-warning"
                    icon={faSignOutAlt}
                  />
                </button>
              </div>
            ) : (
              <Nav.Link
                style={{ color: "orange" }}
                activeStyle={navStyle}
                as={NavLink}
                to="/login"
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
