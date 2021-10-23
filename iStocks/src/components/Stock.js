import React from 'react'
import { useParams } from 'react-router-dom'

function Stock(props) {

  const params = useParams();
  console.log(params)
  

  const stock = props.stockData.filter( data => data.symbol === params.symbol)
  console.log(stock);

  // const stock = 'https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=YOUR KEY'

  return (
    <div>
      <h3>{`Name: ${stock[0].name}`}</h3>
      <h3 className="price">{`Price: ${stock[0].lastPrice}`}</h3>
    </div>
  )
}


export default Stock