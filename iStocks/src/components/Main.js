import React from "react";
import { useEffect,useState } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import About from "./About"
import Stock from "./Stock"

function Main(props) {

  const [stock, setStock] = useState("");

  return (
    <main>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path='/dashboard'>
          <Dashboard setStock={setStock} stockData={props.stockData}/>
        </Route>
      <Route path="/stocks/:symbol">
        <Stock stock={stock} stockData={props.stockData}/>
      </Route>

      </Switch>
      
      
      
    </main>
  )
}

export default Main
