import React, { useState } from "react";
import CartImage from "../Photos/cart.png";
import Iphone11 from "../Photos/iphone11.jpg";
import Iphone15 from "../Photos/iphone15.jpg";
import Samflip from "../Photos/samflip.png";
import Samfold from "../Photos/samfold.jpg";
import Samsung7 from "../Photos/samsung7.jpg";
import Samsung23 from "../Photos/samsung23.jpg";
import "./Home.css";
import Cart from "./cart";
import photosArray from "../Basics/photosArray";
import { Link } from "react-router-dom";

export interface Product {
  url: string;
  name: string;
}

export const productArray: Product[] = [
  {
    url: Iphone11,
    name: "Iphone11",
  },
  {
    url: Iphone15,
    name: "Iphone15",
  },
  {
    url: Samflip,
    name: "Samsung Galaxy Flip",
  },
  {
    url: Samfold,
    name: "Samsung Galaxy Fold",
  },
  {
    url: Samsung23,
    name: "Samsung Galaxy s23",
  },
  {
    url: Samsung7,
    name: "Samsung Galaxy s7",
  },
];
const Home = () => {
  const [count, setCount] = useState<{[key : string]: number}>(
    productArray.reduce((acc, product) => ({ ...acc, [product.name] : 0}), {})
  );
  const totalCount = Object.values(count).reduce((acc : any, count) => acc + count , 0)
  
  function handleIncrease(productName : string) {
    
    setCount((previousCount) => ({
      ...previousCount,
      [productName] : previousCount[productName] + 1
    }))
  }
  
  function handleDecrease(productName : string) {
    if(count[productName] > 0){
      setCount((previousCount) => ({
        ...previousCount,
        [productName] : previousCount[productName] - 1
      }))
    }
  }
  
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  function addToSelectedProducts ( productName : string ) {
    const productToAdd = productArray.find((product) => product.name === productName);
    if (productToAdd) {
      setSelectedProducts([...selectedProducts, productToAdd])
    }
  } 


  return (
    <div className="Parent">
      <div>
        <section>
          <nav className="NavBar">
            <div className="CartComponents">

              <Link to="/Cart"><img src={CartImage} alt="CartImage" className="CartImage" /></Link>
              <div className="NumberDiv">{totalCount}</div>
            </div>
          </nav>
        </section>
        <section>
          <div className="Product">
            {productArray.map((photo, index) => (
              <div className="ProductItem" key={index}>
                <img className="productArray" src={photo.url} alt="" />
                <p>
                Name : {photo.name}
                </p>
                <p>
                <button onClick={() => {handleIncrease(photo.name); addToSelectedProducts(photo.name);}}>Add to Cart</button>
                </p>
                <button onClick={() => handleDecrease(photo.name)}> - </button>
                {count[photo.name]}
                <button onClick={() => handleIncrease(photo.name)}> + </button>
                
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Cart products = {selectedProducts}  />
      </div>
    </div>
  );
};

export default Home;
