// IMPORT useEffect
import React, { useState, useEffect } from 'react';

const ColoredDiv = (props) => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  // SETUP useEffect
  useEffect(() => {
    console.log(`ColoredDiv ${props.color} - useEffect - ComponentDidMount - width`, width);
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  },[]);

  let styles = {
    background: props.color,
   // add conditional logic here
   flex: width > 1023 ? `1 0 0`: `0 0 0`
  }
  
  return (
    <>
      <div 
        style={styles}
        className="colored-div"
        >
        {props.color}
        <button onClick={() => props.handleRemove(props.index)}>Remove</button>
      </div>
    </>
  );
}

export default ColoredDiv