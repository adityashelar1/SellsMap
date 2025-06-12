import React from "react";
import Helmet from "../helmet/Helmet";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  List,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <img src={logo} alt="imagenotfound" />
              <div>
                <h1>SellsMap</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              porro necessitatibus eligendi incidunt laudantium eveniet rerum
              temporibus tempora totam quibusdam?
            </p>
          </Col>
          <Col lg="3">
            <div className="footer_quicklinks">
              <h4 className="quick_link-titles">Top Categories</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Laptop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Chairs</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer_quicklinks">
              <h4 className="quick_link-titles">Useful Links</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer_quicklinks">
              <h4 className="quick_link-titles">Contact</h4>
              <ListGroup className="mb-3">
                <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2">
                  <Link to="#">
                    <span>
                      <i class="ri-map-pin-2-line"></i>
                    </span>
                  </Link>
                  <p>Deccan , Pune - 411001</p>
                </ListGroupItem>
                <ListGroupItem className="icons d-flex align-items-center gap-2 ps-0 border-0">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>+91 96583 25147</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2">
                  <Link to="#">
                    <span>
                      <i class="ri-facebook-circle-line"></i>
                    </span>
                  </Link>
                  <p>SellsMap@facebook</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 icons d-flex align-items-center gap-2">
                  <Link to="#">
                    <span>
                      <i class="ri-twitter-x-line"></i>
                    </span>
                  </Link>
                  <p>SellsMap@twitter</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer_size">
        <Col lg="12" className="copyright_footer">
          <p className="footer_copyright text-center">
            Copyright {year}{" "}
            <span>
              <i class="ri-copyright-line"></i>
            </span>
            Sells Map developed by Aniket Phadke. All Rights Reserved
          </p>
        </Col>
      </div>
    </footer>
  );
};

export default Footer;
