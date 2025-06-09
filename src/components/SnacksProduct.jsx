import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/CatProduct.css'; 

import Snack1 from '../assets/snack cate 1.png';
import Snack2 from '../assets/snack cate 2.png';
import Snack3 from '../assets/snack cate 3.png';
import Snack4 from '../assets/snack cate 4.png';
import Snack5 from '../assets/snack cate 5.png';
import Snack6 from '../assets/snack cate 6.png';
import Snack7 from '../assets/snack cate 7.png';
import Snack8 from '../assets/snack cate 8.png';

const allProducts = [
  {
    id: '1',
    images: [
      {
        src: Snack1,
        name: 'Donuts',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack2,
        name: 'Donuts',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack3,
        name: 'Donuts',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '2',
    images: [
       {
        src: Snack2,
        name: 'Orange Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack3,
        name: 'Orange Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack1,
        name: 'Orange Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '3',
    images: [
      {
        src: Snack3,
        name: 'Watermelon Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack2,
        name: 'Watermelon Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack1,
        name: 'Watermelon Juice',
        price: 150,
        category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '4',
    images: [
      {
        src: Snack4,
        name: 'Chips',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack6,
        name: 'Chips',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack7,
        name: 'Chips',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '5',
    images: [
      {
        src: Snack5,
        name: 'Biscuit',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack6,
        name: 'Biscuit',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
       {
        src: Snack7,
        name: 'Biscuit',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '6',
    images: [
      {
        src: Snack6,
        name: 'Burger',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack1,
        name: 'Burger',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack7,
        name: 'Burger',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '7',
    images: [
      {
        src: Snack7,
        name: 'Popcorn',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack1,
        name: 'Popcorn',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack7,
       name: 'Popcorn',
        price: 150,
        category:"Snacks",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '8',
    images: [
      {
        src: Snack8,
       name: 'cappuccino ',
        price: 150,
       category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
     {
        src: Snack3,
       name: 'cappuccino ',
        price: 150,
       category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: Snack5,
       name: 'cappuccino ',
        price: 150,
       category:"Beverage",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
];
 const strawberryDescription = {
    main: "Strawberries are often described as sweet, juicy, and bright red berries with a fragrant, fruity aroma. They are typically sold fresh in containers or boxes and are a popular addition to various recipes and meals.",
    detailed: "Here's a more detailed look at how strawberries might be described in a grocery store setting:",
    appearance: [
      "Color: Bright red, with variations depending on the variety.",
      "Shape: Typically round or oval, with a smooth surface.",
      "Seeds: The seeds are small, whitish or brownish specks that cover the surface of the fruit.",
      "Freshness: Shiny, firm, and free from blemishes or mold."
    ],
    tasteAroma: [
      "Flavor: Sweet and juicy, with a slightly tart or sour note in some varieties.",
      "Aroma: A pleasant, fruity, and fragrant aroma."
    ],
    nutrition: [
      "Vitamin C: Rich in vitamin C, an important antioxidant.",
      "Fiber: A good source of fiber.",
      "Other nutrients: Contains other vitamins, minerals, and antioxidants.",
      "A healthy and low-calorie fruit."
    ],
    uses: [
      "Fresh consumption: Enjoyed as a snack or added to salads, desserts, or smoothies.",
      "Culinary applications: Used in jams, sauces, desserts, and other dishes."
    ],
    storage: [
      "Refrigeration: Should be refrigerated to maintain freshness.",
      "Humidity: Best stored in the refrigerator at high humidity."
    ]
  };

const FruitProduct = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const productData = allProducts.find(p => p.id === productId);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState('250g');

  useEffect(() => {
    if (productData) {
      setSelectedVariant(productData.images[0]);
    }
  }, [productData]);

  const handleAddToCart = () => {
  if (selectedVariant) {
    const cartItem = {
      id: `${productId}-${selectedVariant.name.replace(/\s+/g, '-')}`,
      name: selectedVariant.name,
      price: selectedVariant.price,
      image: selectedVariant.src, 
      quantity,
      weight,
    };
    addToCart(cartItem);
  }
};

  if (!productData) {
    return (
      <>
        <Header />
        <div className="container py-5">
          <h3>Product not found.</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid py-5 image-content">
        <div className="row">
          <div className="col-md-6">
            <img
              src={selectedVariant?.src}
              className="img-fluid rounded main-product-image"
              alt="Product"
            />
            <div className="d-flex mt-3 gap-2 image-size">
              {productData.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={`Thumbnail ${idx}`}
                  className="img-thumbnail small-thumb"
                  onClick={() => setSelectedVariant(img)}
                />
              ))}
            </div>
          </div>

          <div className="col-md-6 fs-5 fw-bold">
            <h3>{selectedVariant?.name}</h3>
            <p>{selectedVariant?.description}</p>
            <h4>₹ {selectedVariant?.price}</h4>
            <p><strong>TAX INCLUDED | SHIPPING CALCULATED AT CHECKOUT</strong></p>

            <div className="d-flex align-items-center my-3">
              <button
                className="btn "
                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              >-</button>
              <span className="mx-3 fw-bold">{quantity}</span>
              <button
                className="btn "
                onClick={() => setQuantity(prev => prev + 1)}
              >+</button>
            </div>

            <p><strong>Quantity: {weight}</strong></p>
            <div className="mb-3">
              {['250g', '500g', '1kg'].map(w => (
                <label key={w} className="me-3">
                  <input
                    type="checkbox"
                    name="weight"
                    value={w}
                    checked={weight === w}
                    onChange={() => setWeight(w)}
                  />{' '}
                  {w}
                </label>
              ))}
            </div>

            <button className="btn btn-success mb-3 addtocart-btn w-50" onClick={handleAddToCart}>
              Add to Cart
            </button>

            <div>
              <h3><i className="bi bi-truck"></i> Free shipping on all orders over ₹450</h3>
              <h3><i className="bi bi-clock-history"></i> Delivery in 3–4 working days</h3>
              <h3 className="text-success text-decoration-underline">Free delivery and return policies</h3>
            </div>
          </div>
        </div>

        <div className='description mt-5 fw-bold'>
          <h3 className="mb-3 text-decoration-underline">DESCRIPTION</h3>
          <h3>{strawberryDescription.main}</h3>
          <h3>{strawberryDescription.detailed}</h3>

          <h3 className='fw-bold'>Appearance:</h3>
          <ul className='fs-5'>
            {strawberryDescription.appearance.map((item, index) => (
              <li key={`appearance-${index}`}>{item}</li>
            ))}
          </ul>

          <h3 className='fw-bold'>Taste and Aroma:</h3>
           <ul className='fs-5'>
            {strawberryDescription.tasteAroma.map((item, index) => (
              <li key={`taste-${index}`}>{item}</li>
            ))}
          </ul>

          <h3 className='fw-bold'>Nutrition:</h3>
           <ul className='fs-5'>
            {strawberryDescription.nutrition.map((item, index) => (
              <li key={`nutrition-${index}`}>{item}</li>
            ))}
          </ul>

          <h3 className='fw-bold'>Uses:</h3>
           <ul className='fs-5'>
            {strawberryDescription.uses.map((item, index) => (
              <li key={`uses-${index}`}>{item}</li>
            ))}
          </ul>

          <h3 className='fw-bold'>Storage:</h3>
          <ul className='fs-5'>
            {strawberryDescription.storage.map((item, index) => (
              <li key={`storage-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};


export default FruitProduct;
