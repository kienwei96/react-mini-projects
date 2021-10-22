import React, { useContext } from 'react';
import { cartContext } from "../context/cartContext";


function MyShoppingCart(props) {

  const [cart, dispatch] = useContext(cartContext);

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
        {cart.map((item, index) => {
          return (
            <li onClick={() => dispatch({type:'REMOVE', value:index})}>
              {`${item.name} - $${item.price}`}
            </li>
          )
        })}
      </ul>
    </div>
  
  );
}

export default MyShoppingCart;
