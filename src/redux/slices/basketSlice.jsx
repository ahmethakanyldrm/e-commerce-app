import { createSlice } from "@reduxjs/toolkit";


const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false
}  



export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProductToBasket: (state, action) => {
     const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
     if (findProduct) {
      // daha önceden eklenmiştir
    const extractedProducts = state.products.filter((product) => product.id != action.payload.id)

    findProduct.count += action.payload.count;

    state.products = [...extractedProducts, findProduct]
    writeFromBasketToStorage(state.products);

     } else {
      // daha önceden eklenmemiştir
      state.products = [...state.products, action.payload];
      writeFromBasketToStorage(state.products);
     }
    },

    setDrawer: (state) => {
      state.drawer = !state.drawer;
    }
  }
})

export const {addProductToBasket, setDrawer} = basketSlice.actions;
export default basketSlice.reducer;