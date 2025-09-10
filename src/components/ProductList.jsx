import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'

function ProductList() {

  const dispatch = useDispatch()
  const {products} = useSelector((store) => store.product);
  console.log(products);
  

  useEffect(() => {
    dispatch(getAllProducts())

  }, [])
  return (
    <div>{
      products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image} alt={product.title} width="100" />
        </div>
      ))
    }</div>
  )
}

export default ProductList