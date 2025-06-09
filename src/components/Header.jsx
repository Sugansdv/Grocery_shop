import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart.jpg';
import { CartContext } from './CartContext';

import '../assets/css/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.length;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isCategoriesActive = [
    '/category',
    '/vegetable',
    '/fruits',
    '/dairy-eggs',
    '/meat-seafood',
    '/bakery',
    '/pantry-staples',
    '/snacks-beverage',
    '/frozen-food'
  ].some(path => location.pathname.toLowerCase().includes(path));

  const isBestSalesActive = [
    '/best-sales'
  ].some(path => location.pathname.toLowerCase().includes(path));

  const productCategoryMap = {
  strawberry: { path: "/product/fruits", id: "1" },
  apple: { path: "/product/fruits", id: "2" },
  onion: { path: "/product/vegetable", id: "1" },
  carrot: { path: "/product/vegetable", id: "2" },
};

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
  };

  const handleSearch = () => {
  const lowerTerm = searchTerm.toLowerCase().trim();
  const product = productCategoryMap[lowerTerm];
  
  if (product) {
    navigate(`${product.path}/${product.id}`);
  } else {
    alert("Product not found");
  }
};


  return (
    <header className="fixed-header">
      <div className="top-banner">
        <div className="container">
          <p className="top-text">
            Fresh & Organic produce from our farmers to your kitchen
          </p>
        </div>
      </div>

      <div className="main-header">
        <div className="container">
          <div className="row align-items-center first-row">
            <div className="col-lg-4 col-md-4">
              <NavLink to="/" className="logo-link">
                <img src={logo} alt="Fresh & Organic" className="logo-img" />
              </NavLink>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="form-control search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                  }}
                />
                <button className="btn search-btn" onClick={handleSearch} style={{ color: 'white' }}>
                  <i className="bi bi-search me-1"></i> Search
                </button>

              </div>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row second-row">
            <div className="col-12">
              <nav className="nav-container fs-5 fw-bold">
                <button
                  className="mobile-toggle-btn d-lg-none"
                  onClick={toggleNav}
                >
                  <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
                </button>
                <ul
                  className={`nav-list ${isNavOpen ? 'mobile-nav-open' : ''}`}
                >
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/category"
                      className={() =>
                        isCategoriesActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/best-sales"
                      className={() =>
                        isBestSalesActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Best Sales
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li className="position-relative ms-3">
                    <NavLink
                      to="/cart"
                      className={({ isActive }) =>
                        isActive ? 'cart-link active' : 'cart-link'
                      }
                    >
                      <img src={cart} alt="cart" className="cart-img" />
                      {totalItems > 0 && (
                        <span
                          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                          style={{ fontSize: '0.75rem' }}
                        >
                          {totalItems}
                          <span className="visually-hidden">
                            items in cart
                          </span>
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className="ms-3">
                    {loggedInUser ? (
                      <div className="dropdown">
                        <button
                          className="btn btn-success dropdown-toggle account-btn"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          My Account
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <button className="dropdown-item" onClick={handleLogout}>
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive
                            ? 'btn btn-success bg-success account-btn'
                            : 'btn btn-outline-success account-btn'
                        }
                      >
                        Register Now
                      </NavLink>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
