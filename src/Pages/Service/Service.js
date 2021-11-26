import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Service.css";

const Service = ({ service, handleBook }) => {
  const { _id, name, img, description } = service;
  return (
    <Col className="overflow-hidden">
      <Card
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${img})`,
          backgroundRepeat: "no-repeat",
        }}
        className="p-3 h-100 card text-white"
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={() => handleBook(_id)} variant="outline-warning">
            Book <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
