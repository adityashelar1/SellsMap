import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import userIcon from "../../assets/images/user-icon.png";
import "remixicon/fonts/remixicon.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import Signup from "../../pages/Signup";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";


const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const headerRef = useRef(null);
  const profileActionRef = useRef(null);
  const stickyHeaderFunction = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };
  const logout = ()=>{
    signOut(auth).then(()=>{
      toast.success("Logged out successfully");
      navigate("/home");
    }).catch(err=>{
      toast.error(err);
    });
  }
  useEffect(() => {
    stickyHeaderFunction();
    return () => window.removeEventListener("scroll", { stickyHeaderFunction });
  });
  const navigateToCart = () => {
    navigate("/cart");
  };
  const toggleProfileActions = () => profileActionRef.current.classList.toggle("show-profileActions");
  return (
    <header ref={headerRef} className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
            <Link to="/home">
              <div className="logo">
                <img src={logo} alt="imagenotfound" />
                <div>
                  <h1>SellsMap</h1>
                </div>
              </div>
            </Link>
            <div className="navigation">
              <ul className="menu">
                {nav_links.map((item, index) => (
                  <motion.li
                    whileTap={{ scale: 1.3 }}
                    className="nav_item"
                    key={index}
                  >
                    <NavLink
                      className={(navClass) =>
                        navClass.isActive ? "nav_active" : ""
                      }
                      to={item.path}
                    >
                      {item.display}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="nav_icons">
              <span className="fav_icon">
                <i class="ri-heart-line"></i>
                <span className="badge">5</span>
              </span>
              <span className="cart_icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity} </span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={ currentUser ? currentUser.photoURL : userIcon}
                  //src={userIcon}
                  alt="user Image not found"
                  onClick={toggleProfileActions}
                />
                <div className="profile_actions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column">
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                      {/* <Link to="/dashboard">DashBoard</Link> */}
                    </div>
                  )}
                    <Link  id="dashboard" to="/dashboard">DashBoard</Link>
                </div>
                {/* <p>{currentUser.displayName}</p> */}
              </div>
            </div>
            <div className="mobile_menu">
              <span>
                <i class="ri-menu-2-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;