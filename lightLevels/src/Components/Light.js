import React from 'react'

function Lights(props) {

  console.log(props.state);

  const styles = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    border: '1px solid',
    background: props.state.light
  }
  
  return (
    <div style={styles}></div>
  )
}

export default Lights