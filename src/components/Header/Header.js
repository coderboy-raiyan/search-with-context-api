import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAllFoods from "./../../hooks/useAllFoods";
const Header = () => {
  const [userInput, setUserInput] = useState("");
  const { setFoods } = useAllFoods();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals);
      });
  }, [userInput]);

  const handelSearch = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <Navbar bg="dark" sticky="top" expand="lg" variant="dark" className=" p-3">
      <Container>
        <Link className="navbar-brand fw-bold" to="/">
          FoodSearch
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/food">
                Meals
              </Link>
            </li>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handelSearch}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
