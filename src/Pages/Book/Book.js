import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import { HelmetProvider } from "react-helmet-async";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Book = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  const [service, setService] = useState({});
  const [userName, setUsername] = useState(user.displayName);
  const [userEmail, setEmail] = useState(user.email);
  const [travelAddress, setTravelAddress] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [show, setShow] = useState(false);

  const redirect_uri = location.state?.from?.pathname || "/";

  const handleClose = () => {
    setShow(false);
    history.push(redirect_uri);
  };
  const handleShow = () => setShow(true);

  const handleName = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleTravelAdd = (e) => setTravelAddress(e.target.value);
  const handleUserAdd = (e) => setUserAddress(e.target.value);

  useEffect(() => {
    axios.get(`http://localhost:6969/services/${id}`).then((result) => {
      setService(result.data);
      setTravelAddress(result.data.name);
    });
  }, [id]);

  const handleSubmit = (e) => {
    const bookInfo = {
      state: "Pending",
      userName,
      userEmail,
      travelAddress,
      userAddress,
    };
    axios.post("http://localhost:6969/book", bookInfo).then((result) => {
      if (result.data.insertedId) {
        handleShow(true);
      }
    });
    e.preventDefault();
  };

  return (
    <div>
      <HelmetProvider>
        <title>Booking</title>
      </HelmetProvider>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Booked Successfully
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-secondary">
            Your Booking is on panding
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <div
        className="py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${service.img})`,
        }}
      >
        <Container className="mt-5  vh-100 d-flex justify-content-center align-items-center text-white">
          <Form className="w-50" onSubmit={handleSubmit}>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                onChange={handleName}
                type="text"
                value={userName || ""}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleEmail}
                type="email"
                value={userEmail || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Where do you Want To travel?</Form.Label>
              <Form.Control
                onChange={handleTravelAdd}
                value={travelAddress || ""}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Your Address</Form.Label>
              <Form.Control
                onBlur={handleUserAdd}
                type="text"
                placeholder="Address"
              />
            </Form.Group>

            <Button variant="outline-warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default Book;
