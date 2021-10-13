import React from 'react';

function componentBody(props) {
  return (
    <>
        <p><span>conditions:</span> {props.conditions}</p>
        <p><span>time:</span> {props.time}</p>
    </>
  )
}


export default componentBody;