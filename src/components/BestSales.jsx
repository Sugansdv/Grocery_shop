import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { CartContext } from './CartContext';
import '../assets/css/Category.css';
import { Link } from 'react-router-dom';

import BestSales1 from '../assets/fruit des 3.png';
import BestSales2 from '../assets/fruits cate 2.png';
import BestSales3 from '../assets/fruits cate 3.png';
import BestSales4 from '../assets/fruits cate 4.png';
import BestSales5 from '../assets/fruits cate 5.png';
import BestSales6 from '../assets/fruits cate 6.png';
import BestSales7 from '../assets/fruits cate 7.png';
import BestSales8 from '../assets/fruits cate 8.png';

const productsData = [
  { id: 1, name: 'Strawberies',Category:'Best sales', price: 80, rating: 5, image: BestSales1 },
  { id: 2, name: 'Apples',Category:'Best sales', price: 50, rating: 4, image: BestSales2 },
  { id: 3, name: 'Bananas',Category:'Best sales', price: 30, rating: 4, image: BestSales3 },
  { id: 4, name: 'Watermelon',Category:'Best sales', price: 60, rating: 4, image: BestSales4 },
  { id: 5, name: 'Blue Berries',Category:'Best sales', price: 40, rating: 4, image: BestSales5 },
  { id: 6, name: 'Orange',Category:'Best sales', price: 100, rating: 4, image: BestSales6 },
  { id: 7, name: 'Cherry',Category:'Best sales', price: 70, rating: 4, image: BestSales7 },
  { id: 8, name: 'Pista',Category:'Best sales', price: 90, rating: 5, image: BestSales8 },
];

const BestSales = () => {
  const [priceFilter, setPriceFilter] = useState(100);
  const [sortType, setSortType] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    let result = productsData.filter(p => p.price <= priceFilter);

    switch (sortType) {
      case 'a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'best-selling':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        break;
    }
    setFilteredProducts(result);
  }, [priceFilter, sortType]);

 return (
    <>
     <Helmet>
            <title>Groceries Best Sales</title>
          </Helmet>
        <div className="container-fluid p-4">
           <div className="text-center mb-4">
                <h3
                  className="fs-1"
                  style={{ textDecoration: "underline", color: "#28a745" }}
                >
                  Best Sales
                </h3>
              </div>
          <div className="row">
            <div className="col-md-3 fs-4 fw-bold">
            Filter
            <div className="position-relative mt-4">
              <label className="form-label">Sort by Price</label>
              <div className="range-container position-relative mt-5">
                <div
                  className="price-tag text-white px-2 py-1 rounded position-absolute bg-success"
                  style={{
                      left: `${(priceFilter / 100) * 100}%`,
                      transform: "translateX(-50%)",
                      top: "-30px",
                      width:'18%'
                    }}
                >
                  ₹ {priceFilter}
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(Number(e.target.value))}
                  className="form-range"
                />
              </div>
            </div>
          </div>

            <div className="col-md-9">


              <div className="d-flex justify-content-end mb-3">
                <h5 className="m-2">Sort by: </h5>
                <select
                  className="form-select w-auto"
                  onChange={(e) => setSortType(e.target.value)}
                  value={sortType}
                >
                  <option value="featured">Featured</option>
                  <option value="best-selling">Best Selling</option>
                  <option value="a-z">Alphabetically A-Z</option>
                  <option value="z-a">Alphabetically Z-A</option>
                  <option value="low-high">Price Low to High</option>
                  <option value="high-low">Price High to Low</option>
                </select>
              </div>

              <div className="row ms-2">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="card-img-top"
                        onClick={() =>
                          navigate(`/product/bestsales/${product.id}`)
                        }
                        style={{ cursor: "pointer" }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title fw-bold">{product.name}</h5>
                        <p className="card-text">₹ {product.price}</p>
                        <div className="mb-2">
                        {Array.from({ length: product.rating }, (_, i) => (
                          <i className="bi bi-star-fill fs-lg-5 px-lg-2" key={i} style={{ color: '#C5E6A1' }}></i>
                        ))}
                      </div>
                        <button
                          className="btn btn-success addtocart"
                          onClick={() => addToCart(product)}
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
        </div>
    </>
  );
};

export default BestSales;
