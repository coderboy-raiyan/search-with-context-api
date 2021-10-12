import React from "react";
import { Card, Col } from "react-bootstrap";

const SingalFood = ({ food }) => {
  const { strMeal, strMealThumb, strCategory, strInstructions } = food;
  return (
    <Col xs={12} md={4} lg={4}>
      <Card className="shadow h-100">
        <Card.Img
          variant="top"
          src={strMealThumb}
          className="w-75 m-auto my-4 rounded"
        />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strInstructions?.slice(0, 100)}</Card.Text>
          <Card.Text>
            {" "}
            <small>{strCategory}</small>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingalFood;
