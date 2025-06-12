import React from "react";
//import productImg from "../../assets/images/laptop19.png";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";
import useGetData from "../../custom-hooks/useGetData";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const {data :products} =useGetData("products");
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        price: item.price,
        // imgUrl: item.imgUrl,
         imgURL : item.imgUrl,
        quantity: item.quantity,
      })
    );
    toast.success("Product Added Successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <Link to={`/shop/${item.id}`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={item.imgURL}
              alt="ImageNotFound"
            />
            <div className="p-2 product_info ">
              <h3 className="product_name">{item.title}</h3>
              <span>{item.category}</span>
            </div>
          </Link>
          <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">₹{item.price}</span>
            <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
              <i class="ri-add-line"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
