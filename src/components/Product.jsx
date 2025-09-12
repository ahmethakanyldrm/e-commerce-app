import React from 'react'
import '../css/Product.css'

function Product({product}) {
  console.log(product);
  const {id, title, price, description, category, image} = product;
  console.log(description, category, id);
  
  return (
    <div className='card'>
      <img src={image} className='image' />
      <div>
        <p style={{textAlign: "center", height: "50px"}}>{title}</p>
        <h3 style={{textAlign: "center"}}>${price}</h3>
      </div>

      <div className='flex-row'>
        <button className='detailButton'>Detaya Git</button>
      </div>
    </div>
  )
}

export default Product