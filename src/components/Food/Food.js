import React from "react";
import { Container, Row } from "react-bootstrap";
import SingalFood from "../SingalFood/SingalFood";
import useAllFoods from "./../../hooks/useAllFoods";

const Food = () => {
  const { foods } = useAllFoods();
  return (
    <Container>
      <Row className="g-4 my-5">
        {foods?.map((food) => (
          <SingalFood food={food} key={food.idMeal} />
        ))}
      </Row>
    </Container>
  );
};

export default Food;
