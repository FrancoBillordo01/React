import React from 'react'
import './CardWidget.css'

const CardWidget = () => {

        const ImgCarrito = "https://w7.pngwing.com/pngs/387/168/png-transparent-shopping-cart-button-graphy-earring-shopping-cart-angle-rectangle-logo.png"
    return (
    <div>
        <img className='ImgCarrito' src={ImgCarrito} alt="Carrito" />
        <strong>1</strong>
    </div>
  )
}

export default CardWidget