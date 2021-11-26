import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import Service from "../../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://desolate-plateau-96499.herokuapp.com/services")
      .then((result) => setServices(result.data));
  }, []);

  const handleBook = (id) => {
    history.push(`/book/${id}`);
  };
  return (
    <Container className="text-center my-5">
      <h2 style={{ color: "orange" }}>Top Destinations</h2>
      <Row xs={1} md={2} lg={3} className="g-3 my-3">
        {!services.length ? (
          <div className=" vh-50 d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="warning" />
          </div>
        ) : (
          services.map((service) => (
            <Service
              key={service._id}
              handleBook={handleBook}
              service={service}
            />
          ))
        )}
      </Row>
    </Container>
  );
};

export default Services;
