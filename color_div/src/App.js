import React, { useState, useEffect } from "react";
import "./styles.css";
import ColoredDiv from './component/ColoredDiv'

export default function App() {
  const [colors, setColors] = useState(['lightgreen', 'pink', 'lightblue'])
  const [width, setWidth] = useState(0)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    updateWidth()
    console.log('App - useEffect - ComponentDidMount - width', width);
    window.addEventListener('resize', updateWidth);
  }, []);

  const handleRemove = (e) => {
    console.log(e)
    const newArr = colors.filter((d, i) => i !== e)
    setColors(newArr);
  }

  const colorsArr = colors.map( (d,i) => {
    return (
    <ColoredDiv color={d} key={i} index={i} handleRemove={handleRemove}/>)
  })
  
  const handleAddColor = () => {
    const colorData = ['yellow', 'black', 'orange']
    let randomColor = Math.floor(Math.random() * colorData.length)
    setColors([...colors, colorData[randomColor]])
  }
  return (
    <div className="App">
    <h1>Current Window Width: {width}</h1>
    <div className='colored-divs'>
      {colorsArr}
    </div>
    <button onClick={handleAddColor}>Add New Color</button>
  </div>
  );
}
