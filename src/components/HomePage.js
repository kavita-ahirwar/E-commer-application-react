import { React } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import { BsChevronRight } from "react-icons/bs";
import { IconName } from "react-icons/bs";
// import styles from "../style-css/HomePage.css";
// import style-css from '../style-css/HomePage.css';

function HomePage() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <h4 style={{ color: "black" }}>Category menu</h4>
            <u style={{ color: "#6A983C" }}>
              <h6>Bakery</h6>
              <h6>Fruit and vegetables</h6>
              <h6>Meat and fish</h6>
              <h6>Drinks</h6>
              <h6>Kitchen</h6>
            </u>
            <Button className="btn m-lg-2" variant="outline-secondary">
              More categories
              <BsChevronRight />
            </Button>{" "}
          </div>
          <div className="col-lg-4 mt-5">
            <Card style={{ height: "14rem", width: "" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Text style={{ color: "#6A983C" }}>
                  Banner subfocus
                </Card.Text>
                <Card.Title style={{ color: "black" }}>
                  Space for heading
                </Card.Title>
                <Button
                  className="col-lg-4 mt-5"
                  variant="outline-success"
                  style={{ width: "200px" }}
                >
                  Read recepies
                  <BsChevronRight />
                </Button>{" "}
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-5">
            <Card style={{ height: "14rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Text style={{ color: "#6A983C" }}>
                  Banner subfocus
                </Card.Text>
                <Card.Title style={{ color: "black" }}>
                  Space for heading
                </Card.Title>
                <Button
                  className="col-lg-4 mt-5"
                  variant="outline-success"
                  style={{ width: "200px" }}
                >
                  Read recepies
                  <BsChevronRight />
                </Button>{" "}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="main1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5">
              <h4 style={{ color: "black" }}>Best selling products </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Kitchen</h6>
                <h6>Meat and fish</h6>
                <h6>Special nutrition</h6>
                <h6>Pharmacy</h6>
                <h6>Baby</h6>
              </u>
              <Button className="btn m-lg-2" variant="outline-secondary">
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/kitchen.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/bekery.png" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <h6 className="price" style={{ width: "65px" }}>
                      0.28 USD
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img src="../../public/images/nuitrian.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <p className="price" style={{ width: "65px" }}>
                      1.12 USD
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="container">
          {/* <div className="row">
        <div className="heading">
        <h3 style={{'margin-left':'10px','color':'black'}}>Our customers says</h3>
      </div>
        </div> */}
          <div className="row">
            <div className="col-lg-3 mt-5">
              <h4 style={{ color: "black" }}>Best from Farmers </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Carrots</h6>
                <h6>Tomatoes</h6>
                <h6>Potatoes</h6>
                <h6>Chicken</h6>
                <h6>Pork</h6>
              </u>
              <Button className="btn m-lg-2" variant="outline-secondary">
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/kitchen.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/bekery.png" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <h6 className="price" style={{ width: "65px" }}>
                      0.28 USD
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img src="../../public/images/nuitrian.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <p className="price" style={{ width: "65px" }}>
                      1.12 USD
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="heading">
                <h3 style={{ "margin-left": "10px", color: "black" }}>
                  Our customers says
                </h3>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="butn">
              <Button className="btn m-lg-2" variant="none" >
                More categories
                <BsChevronRight style={{'color':'#6A983C'}}/>
              </Button>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-5">
              <h4 style={{ color: "black" }}>Best from Farmers </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Carrots</h6>
                <h6>Tomatoes</h6>
                <h6>Potatoes</h6>
                <h6>Chicken</h6>
                <h6>Pork</h6>
              </u>
              <Button className="btn m-lg-2" variant="outline-secondary">
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/kitchen.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img variant="top" src="../../public/images/bekery.png" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <h6 className="price" style={{ width: "65px" }}>
                      0.28 USD
                    </h6>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ height: "14rem" }}>
                <Card.Img src="../../public/images/nuitrian.jpg" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <div className="">
                    <Button className=" mt-5" variant="Light">
                      1.48 USD
                    </Button>{" "}
                    <Button
                      className=" mt-5"
                      variant="success"
                      style={{ "margin-left": "80px" }}
                    >
                      Buy Now
                    </Button>{" "}
                    <p className="price" style={{ width: "65px" }}>
                      1.12 USD
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
