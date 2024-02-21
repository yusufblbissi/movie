import React from "react";
import { Container, Navbar, Form, Button } from "react-bootstrap";
import { useState } from "react";
const NavBar = ({searchMovie}) => {
  const [searchValue, setSearchValue] = useState(""); // State to store the search input value

  const handleSearchChange = (event) => {
    
    setSearchValue(event.target.value); // Update the search input value in the state
  };

  const handleSearchClick = () => {
    searchMovie(searchValue); // Pass the search input value to the searchMovie function
    setSearchValue("")
    
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <div>
          <Navbar.Brand href="#">Movies.com</Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchChange}
              />
              <Button variant="outline-success" onClick={()=>{handleSearchClick()}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
