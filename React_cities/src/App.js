import React, { useState } from "react";
import './styles.css';
import imageData from "./imageData";


export default function App() {
  
  const [bigImage, setBigImage] = useState(imageData[0]);
  // const [record, setRecord] = useState({london:0, amsterdam:0, sydney:0, tokyo:0, dallas:0, paris:0, athens:0, dubai:0})
  const [borderStyle, setBorder] = useState({0:"", 1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:""});
  
  const handleClick = (e) => {
    console.log(e.target.id)
    console.log(e.target.alt)
    setBigImage(imageData[e.target.id])
    
    for(let index in borderStyle) {
      if(index === e.target.id) {
        borderStyle[index] = "5px solid green"
      }
      else {
        borderStyle[index] = "#FFFFFF";
      }
    }
    setBorder({...borderStyle})
   
  }
  


  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          { 
            imageData.map((record, index)=>{
            return <img src={imageData[index].img} id={index} className="thumb"
            alt={imageData[index].city} onClick={handleClick} style={ {border: borderStyle[index]}}/> 
            })
          }
        </div>
        { <img
            id="bigimage"
            src={bigImage.img}
            alt="bigimage" />
        }
      </div>
    </div>
  );
}
