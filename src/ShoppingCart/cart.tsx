import React from "react";
import { Product } from "./Home";

interface CartProps {
  products: Product[];
}

const Cart: React.FC<CartProps> = ({ products}) => {
  return (
    <div>
      {products.map((product) => (
        <li key={product.name}>
          <img src={product.url} alt="" />
          Name : {product.name}          
        </li>
      ))}
    </div>
  );
};

export default Cart;
