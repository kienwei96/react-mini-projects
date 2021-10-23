import React from "react";
import { Link } from 'react-router-dom';

function Dashboard(props) {

  let stockRender = props.stockData.map((data, i) => {
    return <Link onClick={()=>props.setStock(data)} key={i} to={`/stocks/${data.symbol}`}>
      <li> {data.name}</li>
    </Link>
  });

  const activeStocks = 'https://financialmodelingprep.com/api/v3/stock/actives?apikey=YOUR KEY'

  return (
    <>
      {stockRender}
  </>
  );
}

export default Dashboard
