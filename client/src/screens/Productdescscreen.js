import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import { useParams } from "react-router-dom";
import { getProductByIdReducer } from "../reducers/productReducer";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader"
import Error from "../components/Error";
import Review from "../components/Review";

export default function Productdescscreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);

  const getproductbyidstate = useSelector((state) => {
    return state.getProductByIdReducer;
  });

  // const { product, loading, error } = { getproductbyidstate };

  const product = getproductbyidstate.product;
  const loading = getproductbyidstate.loading;
  const error = getproductbyidstate.error;

  function addtocart () {
    dispatch(addToCart(product, quantity));
  };
  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  console.log("product", product);

  return (
    <div>
      {loading ? (
        <Loader/>
      ) : error ? (
       <Error error="something went wrong"/>
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="card p-2 m-3 shadow p-3 mb-5 bg-white rounded">
              <h1> <b>{product.name}</b></h1>
              <img src={product.image} className="img-fluid m-3 bigimg" />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6 text-left">
            <div className=" m-2 shadow p-3 mb-5 bg-white rounded">
              <h1><b> Price:{product.price}</b></h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => {
                  setquantity(e.target.value);
                }}
              >
                {[...Array(product.countInStock).keys()].map((x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select>

              <hr />
              {product.countInStock > 0 ? (<button className="btn btn-dark" onClick={addtocart}>
                Add To Cart
              </button>):( <div>
                <h1>out of stock</h1>
                <button className="btn "  disabled onClick={addtocart}>
                Add To Cart
              </button>
              </div>
              
              )}
              
            </div>
            <hr/>
            <Review product={product}/>
          </div>  
        </div>
      )}
    </div>
  );
}
