import { React } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../style-css/HomePage.css";
// import style-css from '../style-css/HomePage.css';

function HomePage() {
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
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        style={{ marginTop: "20px" }}
      >
        <Container>
          <Navbar.Brand href="" className="fresh">
            Freshnesecoms
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <InputGroup className="drop">
              <DropdownButton
                variant="outline-secondary"
                title="All Categries"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="">Action</Dropdown.Item>
                <Dropdown.Item href="">Another action</Dropdown.Item>
                <Dropdown.Item href="">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                aria-label="Text input with dropdown button"
                placeholder="Search Products, categories ..."
              />
            </InputGroup>
            {/* <Button variant="outline-success">Search</Button> */}
            {/* </Form> */}
            <Nav className="nav1">
              <Nav.Link href="" className="link">
                Blog
              </Nav.Link>
              <Nav.Link eventKey={2} href="" className="link">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
      <div>
     <div className="container">
        <div className="row">
            <div className="div"></div>
        </div>
     </div>
      </div>
    </div>
  );
}
export default HomePage;
