import React, { useState, useEffect } from 'react';
import './styles.css';
import CallApiAgain from './component/CallApiAgain';

export default function App() {

    const [activeIcon, setActiveIcon] = useState({});
    const [user, setUser] = useState('');
    const [toggle, setToggle] = useState(true);



    useEffect(() => {
        const makeApiCall = async () => {
          const res = await fetch('https://randomuser.me/api/');
          const data = await res.json();
          setUser(data.results[0]);
          setActiveIcon({
            value: data.results[0].name.first
          });
        };
        makeApiCall();
      }, [toggle]);


  const handleClick = (e) => {
      if(e.target.id === 'name') {
        document.getElementById("bigtext").innerHTML = activeIcon.value;
      }
      else if(e.target.id === 'email') {
        document.getElementById("bigtext").innerHTML = user.email;
      }
      else if(e.target.id === 'birthdate') {
        document.getElementById("bigtext").innerHTML = user.dob.date;
      }
      else if(e.target.id === 'city') {
        document.getElementById("bigtext").innerHTML = user.location.city;
      }
      else if(e.target.id === 'phone') {
        document.getElementById("bigtext").innerHTML = user.phone;
      }
      
  };

  const toggleButton = () => {
      console.log(toggle)
      toggle?setToggle(false):setToggle(true);
  }
  
  const styles = {
      background: user.picture? `url(${user.picture.large})`:''
  };

  return (
      <>
    <CallApiAgain handleToggle={toggleButton}/>
    <div id="container">
      <div style={styles} id="photo"></div>
      <div id="content">
        <span id="smalltext">My name is</span>
        <span id="bigtext">{activeIcon.value}</span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="name" role="img" aria-labelledby="face">
          😀
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="email" role="img" aria-labelledby="email">
          📧
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="birthdate" role="img" aria-labelledby="confetti">
          🎉
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="city" role="img" aria-labelledby="city">
          🌆
        </span>
      </div>
      <div onClick={handleClick} className="attribute">
        <span id="phone" role="img" aria-labelledby="tele">
          📞
        </span>
      </div>
    </div>
    </>
  );
}
