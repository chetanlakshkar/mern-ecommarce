import React from "react";
import axios from "axios";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Filter from "../components/Filter"
import Loader from "../components/Loader"
import Error from "../components/Error"

export default function Homescreen() {
  const getallProductsstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallProductsstate;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <Filter/>
      <div className="row justify-content-center mt-5 ml-2 mr-2">
        {loading ? (
          <Loader/>
          
        ) : error ? (
          <Error error='something went wrong'/>
          
        ) : (
         (products || []).map(product=>{

            return <div className="col-md-3 m-2 p-2 shadow p-3 mb-5 bg-white rounded card">
                <Product product={product}/>
                </div>
         })
        )}
      </div>
    </div>
  );
}
