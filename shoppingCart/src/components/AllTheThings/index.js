import React, {useContext} from 'react';


import { cartContext } from "../context/cartContext";


function AllTheThings(props) {


  const [cart, dispatch] = useContext(cartContext);
  
 
 
  return (
    <div className="AllTheThings">
      <h2>Put these in your cart!</h2>
      <ul>
        {props.product.map((item) => {
          return (
            <li onClick={() => dispatch({type:'ADD', value:item})}>
             {`${item.name} - $${item.price}`}
            </li>
          );
        })}
      </ul>
    </div>
  

  );
}

export default AllTheThings;