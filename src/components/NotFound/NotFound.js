import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <div className="main-image d-flex justify-content-center ">
            <img
              src="https://i.ibb.co/7gR7YLg/404-Error-Page-not-Found-with-people-connecting-a-plug-rafiki.png"
              alt=""
              width="500px"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
