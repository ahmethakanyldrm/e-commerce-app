import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedProduct } from '../redux/slices/productSlice';
import {CiCirclePlus} from "react-icons/ci"
import { CiCircleMinus } from "react-icons/ci";

function ProductDetails() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  const dispatch = useDispatch();

  const {id} = useParams();
  console.log(id);
  const {products, selectedProduct} = useSelector(state => state.product);
 const { title, price, description, category, image } = selectedProduct;
  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
   products && products.map((product)=> {
    if(product.id == id){
      dispatch(setSelectedProduct(product))
    }
   })
  }
  
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={300} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <h4>{category}</h4>
        <p>{description}</p>
        <h3 style={{ color: "red" }}>{price} ₺</h3>

        <div style={{ display: "flex", alignItems: "center"}}>
          <CiCircleMinus style={{ fontSize: "40px", marginRight: "5px" }} onClick={decrement}/>
          <span style={{  fontSize: "35px" }}>{count}</span>
          <CiCirclePlus style={{ fontSize: "40px", marginLeft: "5px" }} onClick={increment} />
        </div>

        <div>
          <button style={{marginTop: "25px", border: "none", padding: "10px", backgroundColor: "orange", borderRadius: "5px"}}>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductDetails