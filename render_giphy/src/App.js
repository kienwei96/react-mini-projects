import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Form from './components/Form';
import Gifs from './components/Gifs';
import MakeApiCall from './components/MakeApiCall';





function App() {
  const [gifData, setGifData] = useState('');
  const [gifEnter, setGifEnter] = useState('random');
  const [gifSearch, setGifSearch] = useState('random')
  const [count, setCount] = useState(0);
  const APIkey = 'vYGhYytFGToHyvrH9hpvJYTC2C5Mqmlg';

  const handleSubmit = () => {
    console.log("gifSearch is now: ", gifSearch)
    setGifSearch(gifEnter);
    console.log("gifSearch is now: ", gifSearch)

  };


  const handleEnter = (enter) => {
    if(enter)
    setGifEnter(enter);
    console.log(gifEnter)
  }

  const handleCount = () => {
    setCount(count+1);
  }

  useEffect(()=>{
  
    const makeApiCall = async () => {
    const someUrl=`https://api.giphy.com/v1/gifs/search?api_key=${APIkey}&q=${gifSearch}`;
    const res=await fetch(someUrl)
    const data=await res.json()
    console.log(data.data);
    console.log(gifSearch);
  
    let random = Math.floor(Math.random() * 10)
  
    setGifData(data.data[random].images.downsized_large.url)
    };

    makeApiCall();
    
  }, [count])


  return (
    <div className="App">
        <h1>Giphy</h1>
      <Form handleEnter={handleEnter} />  
      <MakeApiCall handleSubmit={handleSubmit} handleCount={handleCount} />
      <Gifs gifData={gifData} />
    </div>
  );
}

export default App;
