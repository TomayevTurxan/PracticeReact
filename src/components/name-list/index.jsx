/* eslint-disable no-unused-vars */
import React from 'react'
import { products } from "../../../data";

const Name = () => {
  return (
    <>
      <ul>
        {
          products.sort((a,b)=>a.price -b.price).map((product,idx)=>{
            return <li key={idx}>${product.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default Name