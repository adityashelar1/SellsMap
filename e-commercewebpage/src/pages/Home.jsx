import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Helmet from "../components/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import ProductsList from "../components/ui/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";
import Clock from "../components/ui/Clock";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import heroImg2 from "../assets/images/laptop13.png";
import useGetData from "../custom-hooks/useGetData";


const Home = () => {
  const {data:products,loading}=useGetData("products");
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredProducts = products.filter(
      (item) => item.category === "chair"
    );
    const bestSellingProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredProducts);
    setBestSellingProducts(bestSellingProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, [products]);
  return (
    <Helmet title={"Home"}>
      <Carousel>
        <CarouselItem>
          <section className="hero_section">
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <div className="hero_content">
                    <p className="hero_subtitile">
                      Trending Products in {year}
                    </p>
                    <h2>Make your Enterior More Attractive and Modern</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore ea eum sapiente quaerat doloribus accusamus.
                    </p>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="buy_btn"
                    >
                      <Link to="/shop">SHOP NOW</Link>
                    </motion.button>
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div className="hero_img">
                    <img src={heroImg} alt="ImageNotfound" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </CarouselItem>
        <CarouselItem>
          <section className="hero_section">
            <Container>
              <Row>
                <Col lg="6" md="6">
                  <div className="hero_content">
                    <p className="hero_subtitile">
                      Trending Products in {year}
                    </p>
                    <h2>Make your Life More Decent and Fast</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore ea eum sapiente quaerat doloribus accusamus.
                    </p>
                    <motion.button
                      whileTap={{ scale: 1.2 }}
                      className="buy_btn"
                    >
                      <Link to="/shop">SHOP NOW</Link>
                    </motion.button>
                  </div>
                </Col>

                <Col lg="6" md="6">
                  <div className="hero_img2">
                    <img src={heroImg2} alt="ImageNotfound" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </CarouselItem>
      </Carousel>
      <Services></Services>
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>
            {loading ? <h5 className="fw-bold">loading...</h5> :<ProductsList data={trendingProducts} />}
        
          </Row>  
        </Container>
      </section>
      <section className="best_sells">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Selling Products</h2>
            </Col>
            {loading ? <h5 className="fw-bold">loading...</h5> :  <ProductsList data={bestSellingProducts} />}
           
          </Row>
        </Container>
      </section>
      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Arm Chair</h3>
              </div>
              <Clock></Clock>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store </Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="imagenotfound" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            {loading ? <h5 className="fw-bold">loading...</h5> : <ProductsList data={mobileProducts} />}
            {loading ? <h5 className="fw-bold">loading...</h5> : <ProductsList data={wirelessProducts} />  }
            
           
          </Row>
        </Container>
      </section>
      <section className="popular_product">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">Popular Products</h2>
            </Col>
            {loading ? <h5 className="fw-bold">loading...</h5> : <ProductsList data={popularProducts} /> }
            
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
