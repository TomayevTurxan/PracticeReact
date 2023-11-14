/* eslint-disable no-unused-vars */
import React from "react";
import { products } from "../../../data";

const Rate = () => {
   let productsArray =  products.sort((a,b)=>b.rating.rate - a.rating.rate)

    console.log(productsArray);

    return (
    <>
        
      {
        <div className="card-body">
          <h5>${productsArray[0].title}</h5>
          <p>Rate ${productsArray[0].rating.rate}</p>
        </div>
      }
    </>
  );
};

export default Rate;
