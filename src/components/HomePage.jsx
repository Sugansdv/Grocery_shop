import React, { useContext, useState, useEffect  } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import '../assets/css/HomePage.css';
import { CartContext } from "./CartContext";
import { Card, Row, Col, Button } from "react-bootstrap";
import leftImage from "../assets/header image 1.png";
import rightImage from "../assets/header image 2.png";
import vegetableIcon from "../assets/vegetable icon.png";
import fruitIcon from "../assets/fresh fruits icon.png";
import meatIcon from "../assets/meat icon.png";
import seafoodIcon from "../assets/seafood icon.png";
import milkIcon from "../assets/milk & diary icon.png";
import breadIcon from "../assets/fresh bread icon.png";
import promoImage from "../assets/posterimagehome.png";
import organicTomatoes from "../assets/featured pro home 1.png";
import freshMeat from "../assets/featured pro home 2.png";
import seasonalMangoes from "../assets/featured pro home 3.png";
import greenOnions from "../assets/featured pro home 4.png";

import lemon from "../assets/new arrivals 1.png";
import apple from "../assets/new arrivals 2.png";
import coconut from "../assets/new arrivals 3.png";
import mango from "../assets/trending 1.png";
import berries from "../assets/trending 2.png";
import guava from "../assets/trending 3.png";
import banana from "../assets/best selling home 1.png";
import orange from "../assets/best selling home 2.png";
import pineapple from "../assets/best selling home 3.png";

import posterImage from "../assets/poster image 2.png";
import redChilies from "../assets/best deals 1.png";
import eggs from "../assets/best deals 2.png";
import soya from "../assets/best deals 3.png";
import beans from "../assets/best deals 4.png";

import worldMap from '../assets/map home image.png';
import user1 from '../assets/image on map 1.png';
import user2 from '../assets/image on map 2.png';
import user3 from '../assets/image on map 3.png';
import user4 from '../assets/image on map 4.png';
import user5 from '../assets/image on map 5.png';
import user6 from '../assets/image on map 6.png';
import user7 from '../assets/image on map 7.png';
import reviewUser from '../assets/image on map 8.png';

const HomePage = () => {
    useEffect(() => {
    document.title = "Groceries Home";
  }, []);
  const [activeTab, setActiveTab] = useState("New Arrivals");
  const { addToCart } = useContext(CartContext);
  const products = [
    {
      id: 11,
      name: "Organic Tomatoes",
      price: 80,
      rating: 5,
      image: organicTomatoes,
      category: "Vegetable",
      weight: "250g",
    },
    {
      id: 12,
      name: "Fresh Meat",
      price: 420,
      rating: 5,
      image: freshMeat,
      category: "Meat",
      weight: "500g",
    },
    {
      id: 13,
      name: "Seasonal Mangoes",
      price: 120,
      rating: 5,
      image: seasonalMangoes,
      category: "Fruit",
      weight: "1kg",
    },
    {
      id: 14,
      name: "Green Onions",
      price: 100,
      rating: 5,
      image: greenOnions,
      category: "Vegetable",
      weight: "250g",
    },
  ];

  const categories = [
    { name: "Vegetable", items: 20, icon: vegetableIcon, path: "/vegetable" },
    { name: "Fresh Fruits", items: 12, icon: fruitIcon, path: "/fresh-fruits" },
    { name: "Meat", items: 7, icon: meatIcon, path: "/meat" },
    { name: "Sea Food", items: 12, icon: seafoodIcon, path: "/seafood" },
    { name: "Milk & diary", items: 8, icon: milkIcon, path: "/milk-diary" },
    { name: "Fresh Bread", items: 24, icon: breadIcon, path: "/fresh-bread" },
  ];

  const data = {
    "New Arrivals": [
      { id: 21, name: "European Zesty Lemon", price: 80, image: lemon },
      { id: 22, name: "Apple from Kashmir", price: 240, image: apple },
      { id: 23, name: "Coconuts", price: 320, image: coconut },
    ],
    "Trending Products": [
      { id: 24, name: "Organic Garlic", price: 180, image: mango },
      { id: 25, name: "Strawberries", price: 300, image: berries },
      { id: 26, name: "Spinach", price: 120, image: guava },
    ],
    "Best Sellings": [
      { id: 27, name: "Raddish", price: 60, image: banana },
      { id: 28, name: "Sardines in Fish", price: 150, image: orange },
      { id: 29, name: "Coriander Leaves", price: 200, image: pineapple },
    ],
  };

  const products_bestdeals = [
    { id: 31, image: redChilies, name: "Red Chilies", price: 80, rating: 5 },
    { id: 32, image: eggs, name: "Fresh Eggs", price: 120, rating: 4 },
    { id: 33, image: soya, name: "Soya Chunks", price: 70, rating: 5 },
    { id: 34, image: beans, name: "Dry Beans", price: 135, rating: 5 },
  ];

  const handleAddToCart = (product) => {
    const productToAdd = {
      ...product,
      quantity: 1,
    };
    addToCart(productToAdd);
    console.log("Added to cart:", productToAdd);
  };

  return (
    <>
      <main className="home-main container-fluid">
        <div className="row gx-3 gy-4 mt-4 px-3">
          <div className="col-md-8">
            <div className="banner-left position-relative rounded-4 overflow-hidden">
              <img
                src={leftImage}
                alt="Fresh Grocery"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="banner-content text-dark">
                <p className="small fw-medium">
                  Halal Products{" "}
                  <span className="text-danger">Online Delivery Shop</span>
                </p>
                <h2 className="fw-bold">
                  Make Healthy
                  <br />
                  Life with <span className="text-success">Fresh</span>
                  <br />
                  Grocery
                </h2>
                <p className="w-50 hero-text">
                  Fresh groceries, particularly fruits, vegetables, whole
                  grains, and lean proteins, play a crucial role in nourishing
                  our bodies and promoting overall well-being
                </p>
                 <Button
                  as={Link}
                  to="/category"
                  variant="success"
                  className="promo-button mt-3 w-50"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="banner-right position-relative rounded-4 overflow-hidden">
              <img
                src={rightImage}
                alt="Offer"
                className="img-fluid w-100 h-100 object-fit-cover"
              />
              <div className="offer-tag">-12% off</div>
              <div className="banner-content text-white">
                <p className="small text-danger">Black Friday Sale</p>
                <h4 className="fw-bold">
                  Organic Food Up
                  <br />
                  To 50% Off
                </h4>
                 <Button
                  as={Link}
                  to="/category"
                  variant="success"
                  className="shop-button mt-3 fw-bold"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center py-5">
          <h2 className="fw-bold">Browse All Categories</h2>
          <p className="mb-4">
            Explore a diverse range of categories to find exactly what you need!
          </p>
          <div className="row justify-content-center">
            {categories.map((cat, index) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4"
                key={index}
              >
                <Link
                  to={cat.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="category-card p-3 rounded text-center h-auto w-100">
                    <div className="category-icon-wrapper mb-2">
                      <img
                        src={cat.icon}
                        alt={cat.name}
                        className="category-icon"
                      />
                    </div>
                    <h6 className="fw-bold mb-1">{cat.name}</h6>
                    <p className="text-muted mb-0">{cat.items} Items</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="promo-banner">
          <div className="promo-overlay">
            <Row className="align-items-center h-100">
              <Col md={6} className="promo-content text-white">
                <h2 className="promo-title">
                  Enjoy upto 20% off on your first order
                </h2>
                <h2 className="promo-heading">
                  Fresh Produce, <span className="highlight">From Farm</span>
                </h2>
                <h2 className="promo-text">Products At A Reasonable Price!</h2>
                <Button
                  as={Link}
                  to="/category"
                  variant="success"
                  className="promo-button mt-3 w-50"
                >
                  Shop Now
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="featured-products container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">Featured Products</h2>
            <p className="text-muted fs-5">
              Each item is carefully selected for quality, freshness, and
              nutritional benefits.
            </p>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3"
              >
                <div className="product-card h-100 d-flex flex-column border-0 shadow-sm rounded-3 overflow-hidden">
                  <div className="product-image-container overflow-hidden d-flex align-items-center justify-content-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid product-image"
                    />
                  </div>
                  <div className="product-body p-3 d-flex flex-column flex-grow-1 text-center">
                    <h3 className="product-title fw-bold mb-2 fs-5">
                      {product.name}
                    </h3>
                    <p className="text-muted small">{product.description}</p>
                    <div className="d-flex flex-column align-items-center mb-3">
                      <span className="product-price fw-bold fs-5 mb-2">
                        ₹{product.price}
                      </span>
                      <div className="product-rating text-warning">
                        {[...Array(product.rating)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="success"
                      className="mt-auto py-2 fw-bold mx-auto btn-add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container product-category">
          <div className="row flex-column flex-lg-row">
            <div className="col-lg-6 mb-4 product-box1">
              <div className="d-flex mb-3 nav-tabs-custom flex-wrap">
                {Object.keys(data).map((tab) => (
                  <button
                    key={tab}
                    className={`me-4 tab-btn ${
                      activeTab === tab ? "active-tab" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div>
                {data[activeTab].map((item, index) => (
                  <div
                    className="d-flex flex-column flex-md-row align-items-center p-2 mb-3 product-card1"
                    key={index}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image1 me-md-3 mb-2 mb-md-0"
                    />
                    <div className="text-center text-md-start">
                      <h5>{item.name}</h5>
                      <p>₹ {item.price}</p>
                      <button
                        className="btn btn-success btn-sm add-to-cart-btn"
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 text-stra text-lg-start mt-5 px-3">
              <h3 className="fs-1 ms-lg-5">
                Get <span className="text-warning fw-bold">20% Discount</span>{" "}
                on
                <br /> Your First Sale
              </h3>
              <p className="my-4 fs-4 ms-lg-5">
                To celebrate your first purchase with us,
                <br />
                enjoy a 20% discount on your first order.
              </p>
              <div className="d-flex flex-column flex-sm-row flex-wrap justify-content-center justify-content-lg-start">
                {["45K+", "45K+", "45K+"].map((text, idx) => (
                  <div
                    key={idx}
                    className="info-card1 text-center p-3 bg-white shadow-sm ms-lg-5 ms-md-3"
                  >
                    <h4 className="fw-bold">{text}</h4>
                    <p className="mb-0">Active Users</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative">
          <div className="Poster-container position-relative text-white">
            <img
              src={posterImage}
              alt="Banner"
              className="img-fluid w-100 poster-img"
            />
            <div className="Poster-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-lg-start ms-lg-5 align-items-md-center ms-md-0 ms-5 text-md-center">
              <h1 className="poster-title">
                <strong>
                  Best Deals <span className="text-warning">This Week</span>
                </strong>
              </h1>
              <p className="mb-3 poster-para">
                Don’t miss out on our incredible deals to help you save while
                enjoying fresh, high-quality groceries!
              </p>
              <div className="d-flex gap-3">
                <div className="time-box">
                  7<br />
                  <small>Days</small>
                </div>
                <div className="time-box">
                  168
                  <br />
                  <small>Hours</small>
                </div>
                <div className="time-box">
                  1004
                  <br />
                  <small>Minutes</small>
                </div>
              </div>
            </div>
          </div>

          <div
            className="container position-relative bestdeal-product"
            style={{ marginTop: "-100px", zIndex: 2 }}
          >
            <div className="row procuct-row g-0 ms-lg-5">
              {products_bestdeals.map((product) => (
                <div className="col-12 col-sm-6 col-lg-3" key={product.id}>
                  <div className="card text-center product-card3 shadow-sm">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt={product.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <h4>₹ {product.price}</h4>
                      <div className="text-warning mb-3">
                        {"★".repeat(product.rating)}
                        {"☆".repeat(5 - product.rating)}
                      </div>
                      <button
                        className="btn btn-success w-100"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

         <div className="container bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 position-relative mb-4 mb-lg-0">
            <img src={worldMap} alt="Map" className="img-fluid map-img" />
            <img src={user1} className="map-avatar avatar-1" alt="avatar" />
            <img src={user2} className="map-avatar avatar-2" alt="avatar" />
            <img src={user3} className="map-avatar avatar-3" alt="avatar" />
            <img src={user4} className="map-avatar avatar-4" alt="avatar" />
            <img src={user5} className="map-avatar avatar-5" alt="avatar" />
            <img src={user6} className="map-avatar avatar-6" alt="avatar" />
            <img src={user7} className="map-avatar avatar-7" alt="avatar" />
          </div>

<div className="col-lg-5">
  <div className="bg-white p-4 rounded shadow-sm">
    <div className="d-flex align-items-center mb-3">
      <img
        src={reviewUser}
        alt="review-user"
        className="rounded-circle me-3"
        width="60"
        height="60"
      />
      <div>
        <h5 className="fw-bold mb-1">George Stephen</h5>
        <div className="text-warning">★★★★★</div>
      </div>
    </div>

    <p className="mb-0 fs-6">
      “I love the quality of the produce! Everything is always fresh and tastes amazing. 
      The prices are competitive, and the weekly deals are fantastic. I save so much on my grocery bills”
    </p>
  </div>
</div>


        </div>
      </div>
    </div>
      </main>
    </>
  );
};

export default HomePage;

