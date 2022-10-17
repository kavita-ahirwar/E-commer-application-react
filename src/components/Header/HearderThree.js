import { React } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../style-css/HomePage.css";
// import style-css from '../style-css/HomePage.css';

function HeaderThree() {
  return (
    <div className="navbar3">
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ margin: "20px" }}
    >
      <Container>
        {/* <Navbar.Toggle href="" >Bakery</Navbar.Toggle> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Bakery
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Fruit and vegetables
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Meat and fish
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Drinks
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Kitchen
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Special nutrition
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Baby
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Pharmacy
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="">Action</Dropdown.Item>
              <Dropdown.Item href="">Another action</Dropdown.Item>
              <Dropdown.Item href="">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
 
  )
}
export default HeaderThree;