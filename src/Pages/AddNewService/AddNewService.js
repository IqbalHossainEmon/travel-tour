import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";

const AddNewService = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const history = useHistory();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const redirect_uri = location.state?.from?.pathname || "/";
  const handleClose = () => {
    setShow(false);
    history.push(redirect_uri);
  };
  const handleShow = () => setShow(true);

  const handleName = (e) => setName(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleLink = (e) => setLink(e.target.value);

  const handleSubmit = () => {
    const service = {
      name,
      description,
      img: link,
    };
    axios
      .post("https://desolate-plateau-96499.herokuapp.com/addService", service)
      .then((res) => {
        if (res.data.insertedId) {
          handleShow();
        }
      });
  };
  return (
    <div
      style={{
        backgroundImage: "url(https://i.ibb.co/QKRNHRq/AddToNew.jpg)",
        backgroundSize: "cover",
      }}
      className="vh-100 pt-5"
    >
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-success">
              Added Successfully
            </Modal.Title>
          </Modal.Header>

          <Modal.Footer>
            <Button variant="outline-success" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </Modal>
      </>
      <Container className="mt-5 d-flex align-items-center justify-content-center flex-column">
        <h2 className=" text-warning">Add A Service</h2>
        <Form.Floating className="w-50">
          <Form.Control
            onBlur={handleName}
            id="floatingNameCustom"
            type="text"
            placeholder="name"
          />
          <label htmlFor="floatingNameCustom">Enter Your Name</label>
        </Form.Floating>
        <Form.Floating className="w-50 my-3">
          <Form.Control
            onBlur={handleDescription}
            as="textarea"
            id="floatingDescriptionCustom"
            type="text"
            placeholder="description"
          />
          <label htmlFor="floatingDescriptionCustom">Service Description</label>
        </Form.Floating>
        <Form.Floating className="w-50">
          <Form.Control
            onBlur={handleLink}
            id="floatingImgCustom"
            type="text"
            placeholder="image link"
          />
          <label htmlFor="floatingImgCustom">Your Image Link</label>
        </Form.Floating>
        <Button variant="warning" onClick={handleSubmit} className=" mt-5">
          Submit
        </Button>
      </Container>
    </div>
  );
};

export default AddNewService;
