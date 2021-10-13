import React from 'react';

const noLight = 'black';

export default function Bulb(props) {
    const {goLight, color} = props;

    return(
    <div className="bulb" style={
      {
        backgroundColor: goLight?color:noLight
      }
    }>
    </div>)
}