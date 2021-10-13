import React, { useState } from "react";
import bulbEvents from './bulbData';
import Bulb from "./Bulb";

// get bulbData array
const BulbArray = Object.keys(bulbEvents);


export default function TrafficLight() {

  const [light, setLight] = useState(null);

  const click = (e) => {
    switch(e.target.id) {
      case "stop":
        setLight('Stop');
        return
      case "slow":
        setLight('Slow');
        return
      case "go":
        setLight('Go');
        return
      default:
        throw new Error("There is an error!")
    }
  }
    
    return (
        <>
        <section>
        <div id="control-panel">
        <h2 id="stop" class="button" onClick={click}>Stop</h2>
        <h2 id="slow" class="button" onClick={click}>Slow</h2>
        <h2 id="go" class="button" onClick={click}>Go</h2>
      </div>
          <div id="traffic-lights">
          {
            BulbArray.map((key)=>{
              return <Bulb key={key} goLight={light===key} color={bulbEvents[key]}/> 
              })
          }
          </div>
        </section>
        </>
    )
}