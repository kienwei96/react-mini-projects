import React, {useReducer} from "react";
import initialState from "../initialState"

const lightReducer = (state, action) => {
    switch (action.type) {
      case 'SET_OFF':
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_LOW':
        return {
          ...state,
          activeLight: state.lightValues[1],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_MED':
        return {
          ...state,
          activeLight: state.lightValues[2],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'SET_HIGH':
        return {
          ...state,
          activeLight: state.lightValues[3],
          numberOfClicks: state.numberOfClicks += 1
        };
      case 'RESET':
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks = 0
        };
      default:
        return {
          ...state,
          activeLight: state.lightValues[0],
          numberOfClicks: state.numberOfClicks
        };
    }
  }
  

export default lightReducer