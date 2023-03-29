import React from 'react'
import './ProductCard.css'
import ProductButton from '../ProductButton/ProductButton'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductImage from '../ProductImage/ProductImage'

const ProductCard = (tarjeta) => {
  return (
    <div className='product-card'>
        <ProductImage />
        <ProductInfo />
        <ProductButton />

    </div>
  )
}



export default ProductCard