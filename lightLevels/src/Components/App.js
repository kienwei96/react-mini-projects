import React, { useState, useReducer } from 'react';
import Controls from './Controls'
import Light from './Light'
import lightData from '../lightData'
console.log('lightData', lightData)

let initialState = {
  lightDatas: lightData,
  light: lightData[0].color,
  clicks: 0
}

const lightReducer=(state,action)=>{
  switch(action){
    case 'RESET':
      return {
        ...state,
        light: lightData[0].color,
        clicks: 0
      }
    default:
    
      let lightColor = lightData.filter((obj, index) => obj.name === action.name)[0]
      return {
        ...state,
        light: lightColor.color,
       clicks: state.clicks += 1
      }
  }
}

function App() {
   
    const [state, dispatch]=useReducer(lightReducer,initialState)
    

    
    
  return (
    <div className="App">
      <Controls lightData={lightData} dispatch={dispatch} state={state}/>
      <Light state={state} />
    </div>

  );
}

export default App
