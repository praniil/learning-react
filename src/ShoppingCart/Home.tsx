import React, { useState } from "react";
import CartImage from "../Photos/cart.png";
import Iphone11 from "../Photos/iphone11.jpg";
import Iphone15 from "../Photos/iphone15.jpg";
import Samflip from "../Photos/samflip.png";
import Samfold from "../Photos/samfold.jpg";
import Samsung7 from "../Photos/samsung7.jpg";
import Samsung23 from "../Photos/samsung23.jpg";
import "./Home.css";
import { Interface } from "readline";
import photosArray from "../Basics/photosArray";
import Cart from "./cart"

interface Product {
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
    const [count, setCount] = useState<number>(0)
    function handleCount () {
        setCount(count + 1);
    }
    
  return (
    <div className="Parent">
      <div>
        <section>
          <nav className="NavBar">
            <img src={CartImage} alt="CartImage" className="CartImage"/>
            <div className="NumberDiv">{count}</div>
          </nav>
        </section>
        <section>
          <div className="Product">
            {productArray.map((photo, index) => (
              <div className="ProductItem" key={index}>
                <p>
                  <img className="productArray" src={photo.url} alt="" />
                </p>
                <p> Name : {photo.name} </p>
                <button onClick={handleCount}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Cart/>
      </div>
    </div>
  );
};

export default Home;
