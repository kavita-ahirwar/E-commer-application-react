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
// import beckry from '../../public/images/bakery.png'
import { beckry, kitchen, nuitrian, mk } from "../assets/Images";
import Overlay from "react-bootstrap/Overlay";

function HomePage() {
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <h4 style={{ "font-weight": "bold" }}>Category menu</h4>
            <u style={{ color: "#6A983C" }}>
              <h6>Bakery</h6>
              <h6>Fruit and vegetables</h6>
              <h6>Meat and fish</h6>
              <h6>Drinks</h6>
              <h6>Kitchen</h6>
            </u>
            <Button className="btn m-lg-2 " variant="outline-secondary">
              More categories
              <BsChevronRight />
            </Button>
          </div>
          <div className="col-lg-4 mt-5">
            <Card style={{ height: "14rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Text style={{ color: "#6A983C" }}>
                  Banner subfocus
                </Card.Text>
                <Card.Title style={{ "font-weight": "bold" }}>
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
                <Card.Title style={{ "font-weight": "bold" }}>
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
            <div className="col-lg-3 mt-3">
              <h4 style={{ "font-weight": "bold" }}>Best selling products </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Kitchen</h6>
                <h6>Meat and fish</h6>
                <h6>Special nutrition</h6>
                <h6>Pharmacy</h6>
                <h6>Baby</h6>
              </u>
              <Button
                className="btn mt-5"
                variant="outline-secondary"
                style={{ "margin-left": "10px" }}
              >
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  {/* <h6 className="price" style={{ width: "65px",'margin-top':'35px' }}>
                      0.28 USD
                    </h6> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="mk" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
              {/* <Card style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={beckry}
              />
              <Card.Body>
                <Card.Title className="title">Product Title</Card.Title>
                <Card.Text className="description">
                  Space for a small product description
                </Card.Text>
                <Button  variant="light" className="USDButton">1.48 USD</Button>
                <Button className="buyNow">Buy Now</Button>
              </Card.Body>
            </Card> */}
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
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
            <div className="col-lg-3 mt-3">
              <h4 style={{ "font-weight": "bold" }}>Best from Farmers </h4>
              <u style={{ color: "#6A983C" }}>
                <h6>Carrots</h6>
                <h6>Tomatoes</h6>
                <h6>Potatoes</h6>
                <h6>Chicken</h6>
                <h6>Pork</h6>
              </u>
              <Button
                className="btn mt-5"
                variant="outline-secondary"
                style={{ "margin-left": "10px" }}
              >
                More categories
                <BsChevronRight />
              </Button>{" "}
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  {/* <h6 className="price" style={{ width: "65px",'margin-top':'35px' }}>
                      0.28 USD
                    </h6> */}
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button variant="success"> Buy Now </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    {" "}
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-3">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={mk} alt="mk" />
                <Card.Body>
                  <Card.Title style={{ "font-weight": "bold" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="main3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 " style={{ "margin-top": "100px" }}>
              <div className="heading">
                <h3 style={{ "margin-left": "10px", "font-weight": "bold" }}>
                  Our customers says
                </h3>
              </div>
            </div>
            <div className="col-lg-6 " style={{ "margin-top": "100px" }}>
              <div className="butn">
                <Button className="btn m-lg-2" variant="none">
                  Button
                  <BsChevronRight style={{ color: "#6A983C" }} />
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "text-align": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title>
                    <h6 style={{ "text-align": "center" }}>Name and Surname</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "text-align": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title>
                    <h6 style={{ "text-align": "center" }}>Name and Surname</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "text-align": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you need
                    by writiing a text here “
                  </Card.Text>
                  <Card.Title>
                    <h6 style={{ "text-align": "center" }}>Name and Surname</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "20rem" }}>
                <Card.Body>
                  <Card.Text style={{ "text-align": "center" }}>
                    {" "}
                    “ This is an super space for your customers qoute. Don’t
                    worry it works smooth as pie. You will get all what you
                    needby writiing a text here “
                  </Card.Text>
                  <Card.Title>
                    <h6 style={{ "text-align": "center" }}>Name and Surname</h6>
                  </Card.Title>
                </Card.Body>
              </Card>
              {/* <div
          className="border border-success rounded-circle"
          style={{ width: 50, height: 50, margin: 50 }}>
          <div className="h-100 d-flex justify-content-center align-items-center"></div>
        </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="main4 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ "margin-top": "100px" }}>
              <div className="heading">
                <h3 style={{ "margin-left": "10px", "font-weight": "bold" }}>
                  Section Headline
                </h3>
              </div>
            </div>
            <div className="col-lg-6" style={{ "margin-top": "100px" }}>
              <div className="butn">
                <Button className="btn m-lg-2" variant="none">
                  Button
                  <BsChevronRight style={{ color: "#6A983C" }} />
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                  <h6
                    className="price"
                    style={{ width: "65px", "margin-top": "35px" }}
                  >
                    0.28 USD
                  </h6>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Card.Title style={{ color: "black" }}>
                    Product Title
                  </Card.Title>
                  <Card.Text>Space for a small product description </Card.Text>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px" }}
                  >
                    1.48 USD
                  </Button>
                  <Button className="" variant="success">
                    {" "}
                    Buy Now{" "}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="main5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" style={{ "margin-top": "100px" }}>
              <div className="heading">
                <h3 style={{ "margin-left": "10px", "font-weight": "bold" }}>
                  Section Headline
                </h3>
              </div>
            </div>
            <div className="col-lg-6" style={{ "margin-top": "100px" }}>
              <div className="butn">
                <Button className="btn m-lg-2" variant="none">
                  Button
                  <BsChevronRight style={{ color: "#6A983C" }} />
                </Button>{" "}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mt-5">
              <Button
                className="btn mt-2"
                variant="outline-success"
                style={{ "font-size": "15px" }}
              >
                Dinner tips
              </Button>
              <Card
                style={{
                  width: "25rem",
                  "margin-top": "130px",
                  background: "linear-gradient(#ffff, #000000)",
                }}
              >
                {/* //  'background': "`linear-gradient(to bottom,  ${#ffff} 0%,${#000000} 100%)` }}> */}
                <Card.Body>
                  <Card.Text>
                    <h4>
                      Our chef tips for a great and tasty dinner ready in 20
                      minutes
                    </h4>
                  </Card.Text>
                  <div className="">
                    <div
                      className="border border-success rounded-circle"
                      style={{
                        width: 40,
                        height: 40,
                        margin: 30,
                        background: "white",
                      }}
                    >
                      <div className="h-100 d-flex justify-content-center align-items-center"></div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <Card style={{ width: "19rem" }}>
                <Card.Img variant="top" src={beckry} alt="beckry" />
                <Card.Body>
                  <Button
                    variant="Light"
                    className="USDButton "
                    style={{ "margin-right": "10px", color: "green" }}
                  >
                    Vegetable
                  </Button>
                  <Card.Text>
                    <h5 className="mt-2">
                      Which vegetable your family will love and want’s eat each
                      day
                    </h5>
                  </Card.Text>
                  <h6>Author 15. 6. 2020</h6>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-3 mt-5">
              <div className="head1">
                <h5>Salat is kinda good start to your morning routines</h5>
                <p>Author 15. 6. 2020</p>
              </div>
              <div className="head2 mt-5">
                <h5>Salat is kinda good start to your morning routines</h5>
                <p>Author 15. 6. 2020</p>
              </div>
              <div className="head3 mt-5">
                <h5>Salat is kinda good start to your morning routines</h5>
                <p>Author 15. 6. 2020</p>
              </div>
            </div>
            <div className="col-lg-2 mt-5">
              <Card
                style={{ width: "5rem", height: "5rem", "margin-left": "80px" }}
              ></Card>
              <br />
              <Card
                style={{ width: "5rem", height: "5rem", "margin-left": "80px" }}
              ></Card>
              <br />
              <Card
                style={{ width: "5rem", height: "5rem", "margin-left": "80px" }}
              ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
