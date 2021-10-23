import React from "react";
import Home from "./Home";
import { Route, Link, Switch } from "react-router-dom"
import Procedures from './Procedure';
import Contact from './Contact';

const App = () => {
    return (
        <div>
          <nav>
            <Link to="/">Go to Home Page</Link>
            <Link to="/procedures">Go to Home Page</Link>
            <Link to="/contact">Contact Us!</Link>
            
            {/* <a href="/">Go to Home Page</a>
            <a href="/procedures">See Our Procedures</a>
            <a href="/contact">Contact Us!</a> */}
          </nav>
          <main>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/procedures'>
          <Procedures />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        </Switch>

      </main>
          <div>
           
          </div>
        </div>
    );
}

export default App;
