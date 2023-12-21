import React from 'react'
import {data} from './Data';
import s from './Productos.module.css'
import { AddToCartIcon } from './Icons';

export const ProductsList = ({ numToShow }) => {
const productsToshow = numToShow ? data.slice(0,numToShow) : data;

  return (
    <div className='container-items '>
        {productsToshow.map(product => (
           	<div class="item">
               <figure>
                   <img
                       src={product.img}
                       alt={product.name}
                   />
               </figure>
               <div class="info-product">
                   <h2>{product.nameProduct}</h2>
                   <p class="price">{product.price}</p>
                   <button class="btn-add-cart"><AddToCartIcon/></button>
               </div>
           </div>
        )) }

    </div>
    
  )
}
