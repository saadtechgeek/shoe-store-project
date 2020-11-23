import React from 'react';
import Shoes from './../shoes.json';
import {Link} from 'react-router-dom';
function Product(){

  console.log(Shoes);
  console.log(Object.keys(Shoes));
  return (
    <div>
      <h1>Welcome to Product</h1>
      <div className="productContainer">
         {Object.keys(Shoes).map(keyName => {
             const shoes=Shoes[keyName];
             return (
                <Link key={keyName} className="link" to={`/product/${keyName}`}>
                    <h4>{shoes.name}</h4>
                    <img src={shoes.img} height="150" alt="shoes"></img>
                </Link>
             )
         })}
      </div>
    </div>
  );
}

export default Product;
