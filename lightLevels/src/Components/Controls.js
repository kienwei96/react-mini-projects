import React from 'react'

function Controls(props) {

  const handleClick = (button) => {
    props.dispatch(button)
    console.log(button);
  }

  console.log(props.lightData);

  const lightButtons = props.lightData.map( (d,i) => {
    return <button 
      key={i}
      onClick={() => handleClick(d)}
    >{d.name}</button>
    
  })

  return (
    <>
      <div className="controls">
      {lightButtons}
    </div>
    <p>Number of clicks: {props.state.clicks}</p>
      <button onClick={() => props.dispatch('RESET')}>Reset</button>

   </>
  )
}

export default Controls