import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../assets/css/Category.css';

import fruits from '../assets/fruits cate.png';
import vegetables from '../assets/vege cate.png';
import dairy from '../assets/eggs cate.png';
import meat from '../assets/meat & sea food cate.png';
import bakery from '../assets/bakery cate.png';
import pantry from '../assets/pantry cate.png';
import snacks from '../assets/snack cate.png';
import frozen from '../assets/frozen cate.png';

const categories = [
  { name: 'Fruits', image: fruits, path: '/fruits' },
  { name: 'Vegetables', image: vegetables, path: '/Vegetable' },
  { name: 'Dairy & Eggs', image: dairy, path: '/dairy-eggs' },
  { name: 'Meat & Seafood', image: meat, path: '/meat-seafood' },
  { name: 'Bakery', image: bakery, path: '/bakery' },
  { name: 'Pantry Staples', image: pantry, path: '/pantry-staples' },
  { name: 'Snacks & Beverage', image: snacks, path: '/snacks-beverage' },
  { name: 'Frozen Food', image: frozen, path: '/frozen-food' },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Groceries Category</title>
      </Helmet>

      {/* Inline CSS inside the component */}
      <style>
        {`
          .category-img {
            transition: transform 0.3s ease, filter 0.3s ease;
          }
          .category-img:hover {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        `}
      </style>

      <main className='category'>
        <div className="container mt-5 pt-5">
          <div className="row mt-5">
            {categories.map((cat, index) => (
              <div
                className="col-6 col-md-3 mb-4 text-center"
                key={index}
                onClick={() => navigate(cat.path)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid rounded category-img"
                />
                <h3 className="mt-2">{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Category;
