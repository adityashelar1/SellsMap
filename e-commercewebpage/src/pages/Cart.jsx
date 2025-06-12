import React from "react";
import "../styles/cart.css";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import { Container, Row, Col } from "reactstrap";
//import tdImg from "../assets/images/arm-chair-03.jpg";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useGetData from "../custom-hooks/useGetData";

const Cart = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No Item in the cart</h2>
              ) : (
                <table className="table border">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Total</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} />
                    ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="dflex align-items-center justify-content-between">
                  SubTotal
                </h6>
                <span className="fs-4 fw-600">{totalAmount}</span>
              </div>
              <p className="fs-6 mt-2 ">
                taxes and Shipping will calculate in checkout
              </p>
              <div>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn w-100 mt-2 mb-3"
                >
                  <Link to="/checkout">Checkout</Link>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn w-100 mt-0"
                >
                  <Link to="/shop">Continue Shopping</Link>
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  return (
    <tr>
      <td>
        <img src={item.imgURL} alt="imgnotfound" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>{item.totalAdd}</td>
 
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-6-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;
