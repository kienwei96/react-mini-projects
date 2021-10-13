import React from 'react';

function AllTheThings(props) {
 
 
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {props.products.map((product) => {
          return (
            <li onClick={() => props.onProductClick(product)}>
             {`${product.name} - $${product.price}`}
            </li>
          );
        })}
      </ul>
    </div>
  

  );
}

export default AllTheThings;