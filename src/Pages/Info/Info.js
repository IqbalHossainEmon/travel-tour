import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Info.css";

const Info = () => {
  return (
    <Row
      xs={1}
      md={1}
      lg={3}
      style={{ color: "orange", padding: "100px" }}
      className="bg-primary mx-0 my-5"
    >
      <Col className="d-md-flex align-items-center my-5 first-one">
        <img
          className="mx-md-2"
          src="https://acmap.travelerwp.com/wp-content/uploads/2019/01/ico_localguide_1.svg"
          alt=""
        />
        <h3>1,000+ local guides</h3>
      </Col>
      <Col className="d-md-flex align-items-center border-start border-1 border-warning my-5">
        <img
          className="mx-2"
          src="https://acmap.travelerwp.com/wp-content/uploads/2019/01/ico_maps_1.svg"
          alt=""
        />
        <h3>Handcrafted experiences</h3>
      </Col>
      <Col className="d-md-flex align-items-center border-start border-1 border-warning  my-5">
        <img
          className="mx-2"
          src="https://acmap.travelerwp.com/wp-content/uploads/2019/01/ico_travelers_1.svg"
          alt=""
        />
        <h3>96% happy travelers</h3>
      </Col>
    </Row>
  );
};

export default Info;
