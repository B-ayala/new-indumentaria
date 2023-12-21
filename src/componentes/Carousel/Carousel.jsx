import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider.jsx';
import slides from '../../assets/carrusell/mock.json'

export default function Carousel() {
  return (
    <>    
  <Slider slides={slides} />
</>
  )
}
