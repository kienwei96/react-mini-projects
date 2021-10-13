import React from 'react';
import Body from "./componentBody"


function component1(props) {
    return (
    <div className="weather">
    <img
      src={props.img}
      alt="..."
    />
    <Body conditions={props.conditions} time={props.time}/>
  </div>)
}



export default component1