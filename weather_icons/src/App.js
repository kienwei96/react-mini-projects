import React from "react";
import data from "./data";
import Component from "./component/component1";


const comp=data.map((element, index)=>{
    return <Component key={index} {...element}/>
  })
  
export default function mainApp() {
  return (
    <div class="weatherList">
    {comp}
  </div>
    
  );
}
