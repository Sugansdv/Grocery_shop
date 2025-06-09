import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import Header from './Header';
import '../assets/css/CatProduct.css'; 

import diary1 from '../assets/diary cate 1.png';
import diary2 from '../assets/diary cate 2.png';
import diary3 from '../assets/diary cate 3.png';
import diary4 from '../assets/diary cate 4.png';
import diary5 from '../assets/diary cate 5.png';
import diary6 from '../assets/diary cate 6.png';
import diary7 from '../assets/diary cate 7.png';
import diary8 from '../assets/diary cate 8.png';
import diary9 from '../assets/dairy des 1.png';
import diary10 from '../assets/dairy des 2.png';
import diary11 from '../assets/dairy des 3.png';


const allProducts = [
  {
    id: '1',
    images: [
      {
        src: diary1,
        name: 'Eggs',
        price: 60,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary10,
        name: 'Eggs',
        price: 60,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary11,
        name: 'Eggs',
        price: 60,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '2',
    images: [
      {
        src: diary2,
        name: 'Milk',
        price: 60,
        category:"Milk",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'

      },
      {
        src: diary2,
        name: 'Milk',
        price: 60,
        category:"Milk",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'

      },
      {
        src: diary7,
        name: 'Milk',
        price: 60,
        category:"Milk",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'

      },
    ]
  },
  {
    id: '3',
    images: [
      {
        src: diary3,
        name: 'Country Eggs',
        price: 100,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary1,
        name: 'Country Eggs',
        price: 100,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary8,
        name: 'Country Eggs',
        price: 100,
        category:"Eggs",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '4',
    images: [
      {
        src: diary4,
        name: 'paneer ',
        price: 100,
         category:"Dairy",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
     {
        src: diary6,
        name: 'paneer ',
        price: 100,
         category:"Dairy",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary2,
        name: 'paneer ',
        price: 100,
         category:"Dairy",
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '5',
    images: [
       {
        src: diary5,
        name: 'Quail Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
     {
        src: diary3,
        name: 'Quail Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary8,
        name: 'Quail Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '6',
    images: [
      {
        src: diary6,
        name: 'Cheese',
       category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary6,
        name: 'Cheese',
       category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary7,
        name: 'Cheese',
        category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '7',
    images: [
       {
        src: diary7,
        name: 'Mozzarella Cheese',
        category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary6,
        name: 'Mozzarella Cheese',
        category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
     {
        src: diary2,
        name: 'Mozzarella Cheese',
        category:"Dairy",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
  {
    id: '8',
    images: [
      {
        src: diary8,
        name: 'Duck Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary3,
        name: 'Duck Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
      {
        src: diary5,
        name: 'Duck Eggs',
        category:"Eggs",
        price: 100,
        description: 'Each of products are hand-selected from the local farmers and helps you improve good health'
      },
    ]
  },
];

const DairyProduct = () => {
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
      category:selectedVariant.category
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

  const strawberryDescription = {
    main: "Strawberries are often described as sweet, juicy, and bright red berries with a fragrant, fruity aroma. They are typically sold fresh in containers or boxes and are a popular addition to various recipes and snacks.",
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
                className="btn"
                onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              >-</button>
              <span className="mx-3 fw-bold">{quantity}</span>
              <button
                className="btn"
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
export default DairyProduct;
