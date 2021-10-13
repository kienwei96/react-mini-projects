import React from 'react';

function MyShoppingCart(props) {

  return (
    <div className="MyShoppingCart">
      <h2>Your Cart!</h2>
      <ul>
        {props.cart.map((cartItem, index) => {
          return (
            <li onClick={() => props.onCartItemClick(index)}>
              {`${cartItem.name} - $${cartItem.price}`}
            </li>
          )
        })}
      </ul>
    </div>
  
  );
}

export default MyShoppingCart;
