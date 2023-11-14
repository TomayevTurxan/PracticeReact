/* eslint-disable no-unused-vars */
import React from "react";
import { products } from "../../../data";
const Table = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rate</th>
            <th scope="col">Count</th>
          </tr>
        </thead>
        <tbody>
            {
                products.map((product,idx)=>{
                    return <tr key={idx}>
                    <th scope="row">1</th>
                    <td>${product.title}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                    <td>${product.rating.rate}</td>
                    <td>${product.rating.count}</td>
                  </tr>
                })
            }
        </tbody>
      </table>
    </>
  );
};

export default Table;
