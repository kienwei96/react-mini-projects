// import useState
import React, { useState, useReducer } from 'react';
import './styles.css';
import AllTheThings from './components/AllTheThings';
import MyShoppingCart from './components/MyShoppingCart';
import Form from './components/Form';
import productsArr from './products';
import { productContext } from "./components/context/productContext";
import { cartContext } from "./components/context/cartContext";


const counterReducer=(state,action)=>{
  switch(action.type){
    case 'ADD':
      return ([...state, action.value])
    case 'REMOVE':
      const filtered = state.filter((cartItem, index) => index !== action.value)
      return state = filtered
    default:
      return state
  }
}

export default function App() {
  const [products, setProducts] = useState(productsArr);
  const [cart, dispatch]=useReducer(counterReducer,[])
  

  return (
    <div className="App">
      <h1>Big Time Shopping</h1>
      <productContext.Provider value={[products,setProducts]}>
      <Form />
      </productContext.Provider>
      <div className="products">
      <cartContext.Provider value={[cart, dispatch]}>
      <AllTheThings product={products} />
      <MyShoppingCart  />
      </cartContext.Provider>
    </div>
    </div>
  );
}
