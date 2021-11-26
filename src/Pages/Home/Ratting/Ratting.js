import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";

const Ratting = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://desolate-plateau-96499.herokuapp.com/review")
      .then((result) => setUsers(result.data));
  }, []);
  return (
    <Container className="my-5 text-center">
      <h2 style={{ color: "orange" }}>Our Happy Travelers</h2>
      <Row className="mt-5" xs={1} md={2} lg={3}>
        {!users.length ? (
          <div className=" vh-50 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          users.map((user) => (
            <Col key={user._id}>
              <Card className="h-75 p-5 my-5">
                <div className="d-flex align-items-center">
                  <img className="w-25 rounded-circle" src={user.img} alt="" />
                  <div>
                    <Card.Title style={{ color: "orange" }} className="ms-4">
                      {user.name}
                    </Card.Title>
                    <Rating
                      style={{ color: "yellow" }}
                      emptySymbol={<i className="far fa-star"></i>}
                      fullSymbol={<i className="fas fa-star"></i>}
                      initialRating={parseFloat(user.star)}
                      readonly
                    />
                  </div>
                </div>
                <Card.Body>
                  <Card.Text>{user.review}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Ratting;
