import React from "react";


function Gifs(props) {
    
  return (
  <div className="gif-row">
    <img id="image" src={props.gifData} alt="" />
  </div>
  )
}

export default Gifs;
