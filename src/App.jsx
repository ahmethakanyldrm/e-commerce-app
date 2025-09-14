import React from 'react'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import './App.css'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from "@mui/material/Drawer";
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setDrawer } from './redux/slices/basketSlice'

function App() {
  const dispatch = useDispatch();
  const {products, drawer} = useSelector((store) => store.basket);
  return (
    <div className="app">
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer
          className="drawer"
          style={{ padding: "20px" }}
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div className="flex-row" style={{ padding: "20px" }}>
                  <img
                    style={{ marginRight: "5px" }}
                    src={product.image}
                    width={50}
                    height={50}
                  />
                  <p style={{ width: "320px", marginRight: "5px" }}>
                    {product.title} {(product.count)}
                  </p>
                  <p style={{fontWeight: "bold", color: "red", marginRight: "10px", width: "60px"}}>{product.price} ₺</p>
                  <button style={{marginRight: "5px", borderRadius: "5px", backgroundColor: "red", border: "none", color: "#fff", width: "50px"}}>Sil</button>
                </div>
              );
            })}
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App