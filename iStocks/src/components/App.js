import React from "react";
import stockData from "./stock-data";
import Header from "./Header"
import Main from "./Main"

function App() {
  return (
    <div>
      <Header />
      <Main stockData={stockData}/>
    </div>
  );
}

export default App


