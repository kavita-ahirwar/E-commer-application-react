import { React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../style-css/HomePage.css";
// import style-css from '../style-css/HomePage.css';

function HeaderFirst() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="" className="navbar-link">
            Chat with us
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">+420 336 775 664</Nav.Link>
              <Nav.Link href="">info@freshnesecom.com</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
            <Nav className={styles.kavita}>
              <Nav.Link href="" className="navbar-link">
                Blog
              </Nav.Link>
              <Nav.Link eventKey={2} href="" className="navbar-link">
                About Us
              </Nav.Link>
              <Nav.Link href="" className="navbar-link">
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  )
 }
 export default HeaderFirst;