import React, { useState, useEffect } from 'react';
import './styles.css';
import LeftComp from './LeftComp';
import RightComp from './RightComp';
import DataContext from './DataContext';

const themes = {
  light: {
    background: 'lightblue',
    color: 'black'
  },
  dark: {
    background: '#222222',
    color: 'white'
  }
};

export default function App() {
  const [activeTheme, setActiveTheme] = useState(themes.light);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    activeTheme.background === 'lightblue'?
    setActiveTheme(themes.dark):setActiveTheme(themes.light)
  }, [toggle]);

  const handleClick = (e) => {
    console.log("toggled....");
    setToggle(toggle?false:true);
  }
  console.log("toggle: ", toggle)
  console.log("activeThem: ", activeTheme);
  return (
    <div className="App">
      <h2>Click the button to toggle themes</h2>
      <button onClick={handleClick}>Toggle Themes</button>
      <div className="children">
        <DataContext.Provider value={activeTheme}>
        <LeftComp activeTheme={activeTheme} />
        <RightComp activeTheme={activeTheme}/>
        </DataContext.Provider>
      </div>
    </div>
  );
}
