import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
  console.log(product);
  const {id, title, price, description, category, image} = product;
  console.log(description, category, id);
  
  const navigate = useNavigate();

  return (
    <div className='card'>
      <img src={image} className='image' />
      <div>
        <p style={{textAlign: "center", height: "50px"}}>{title}</p>
        <h3 style={{textAlign: "center"}}>${price}</h3>
      </div>

      <div className='flex-row'>
        <button className='detailButton' onClick={()=> navigate("product-details/" + id)}>Detaya Git</button>
      </div>
    </div>
  )
}

export default Product