import React from 'react';
import HomePage from './HomePage';
import { useEffect } from 'react';
import backgroundImage from './media/aura.jpg';
import './App.css'; 
import { useRef, useState } from "react";


function App() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  useEffect(() => {
    document.title = "ZT Portfolio"
  }, []);


  const coursework = document.getElementById("coursework");
  const cwRef = useRef(coursework);
  const research = document.getElementById("research");
  const resRef = useRef(research);
  const life = document.getElementById("life");
  const lifeRef = useRef(life);

  
  function handleClick1(e) {
    e.preventDefault();
    if (cwRef.current.style.display == "") {
      cwRef.current.style.display = "block";
      resRef.current.style.display = "";
      lifeRef.current.style.display = "";
    }
    cwRef.current.scrollIntoView({ behavior: "smooth" });
  };


  function handleClick2(e) {
    e.preventDefault();
    if (resRef.current.style.display == "") {
      resRef.current.style.display = "block";
      cwRef.current.style.display = "";
      lifeRef.current.style.display = "";
    }
    resRef.current.scrollIntoView({ behavior: "smooth" });
  };

  function handleClick3(e) {
    e.preventDefault();
    console.log(lifeRef.current.style.display)
    if (lifeRef.current.style.display == "") {
      lifeRef.current.style.display = "block";
      resRef.current.style.display = "";
      cwRef.current.style.display = "";
    }
    lifeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={styles}>
    <div>
      <HomePage />
      <div className="grid">
        <a onClick={handleClick1} href="#">
        <div className="cherry_box"> Coursework </div>
        </a>
        <a onClick={handleClick2} href="#">
          <div className="nature_box">Research</div>
        </a>
        <a onClick={handleClick3} href="#">
          <div className="moon_box">Life</div>
        </a>
      </div>
      <div id="scrollview-container"></div>
      <div ref={cwRef} id="coursework" className="big_cherry_box"></div>
      <div ref={resRef} id="research" className="big_nature_box"></div>
      <div ref={lifeRef} id="life" className="big_moon_box"></div>

    </div></div>
  );
}

export default App;

