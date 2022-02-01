import React from "react";
import { Link } from "react-router-dom";
import Rating from 'react-rating'

  export default function product({ product }) {
  return (
    <div className=" text-left  " >
      <div>
        <Link  style={{textDecoration:"none"}} to={`product/${product._id}`}>
          <div className="text-center">  <img src={product.image} className="img-fluid "  /></div>
      
        <h1>{product.name}</h1>
        <Rating
        style={{color:'orange'}}
        initialRating={product.rating}
        emptySymbol="far fa-star fa-1x"
        fullSymbol="fas fa-star fa-1x"
         readonly={true}
  />

        <h1>Price:{product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
