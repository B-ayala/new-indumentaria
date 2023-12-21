import React from 'react'
import Carousel from './Carousel/Carousel.jsx'
import { ProductsList } from './Productos/ProductsList';

export default function Home() {
  return (
    <>

    <Carousel/>
    <ProductsList numToShow={11} />
    </>
   
  )
}
