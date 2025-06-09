import React from 'react';
import { useParams } from 'react-router-dom';

import VegProducts from './VegProducts';
import FruitProduct from './FruitProduct';
import DairyProduct  from './DairyProduct';
import MeatProduct from './MeatProduct';
import SnacksProduct from './SnacksProduct';
import BakeryProduct from './BakeryProduct';
import PantryProducts from './PantryProducts';
import FrozedProducts from './FrozedProducts';
import BestSalesProduct from './BestSalesProduct';

const ProductDetailRouter = () => {
  const { category, productId } = useParams();

  switch (category) {
    case 'vegetable':
      return <VegProducts productId={productId} />;
    case 'fruits':
      return <FruitProduct productId={productId} />;
    case 'dairyeggs':
      return <DairyProduct  productId={productId} />;
    case 'meatseafood':
      return <MeatProduct productId={productId} />;
    case 'snacks':
      return <SnacksProduct productId={productId} />;
    case 'bakery':
      return <BakeryProduct productId={productId} />;
    case 'pantrystaples':
      return <PantryProducts productId={productId} />;
    case 'frozenfood':
      return <FrozedProducts productId={productId} />;
      case 'bestsales':
      return <BestSalesProduct productId={productId} />;
    default:
      return <h3>Product category not found.</h3>;
  }
};

export default ProductDetailRouter;
