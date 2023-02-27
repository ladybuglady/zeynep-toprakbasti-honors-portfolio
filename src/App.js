import React from 'react';
import HomePage from './HomePage';
import { useEffect } from 'react';
import backgroundImage from './media/aura.jpg';
import './App.css'; 
import { useRef, useState } from "react";
import { Paper } from "@material-ui/core";
import map from "lodash/map";
import range from "lodash/range";


function App() {
  const styles = {
    fontFamily: 'Andale Mono, sans-serif',
    backgroundImage: `url(${backgroundImage})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
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
      <div ref={cwRef} id="coursework" className="big_cherry_box">
      <a href="#">
        Freshman Year |
      </a>
      <a href="#">
        | Sophomore Year |
      </a>
      <a href="#">
        | Junior Year |
      </a>
      <a href="#">
        | Senior Year 
      </a>

      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
          <Rome/>
          <AutumnQ/>
          <CSE143/>
      </div>
      </div>
      <div ref={resRef} id="research" className="big_nature_box"></div>
      <div ref={lifeRef} id="life" className="big_moon_box"></div>
    </div>
    </div>
  );
}

export default App;

const card = { height: "1500px", width: "600px", margin: "50px" };
const paperstyle = { height: "100%", width: "514px", padding: "30px", color: "gray", fontSize: 12 }

const Rome = () => {
  return (
    <div style={card}>
      <Paper style={paperstyle}>
      <div> <h3>Travel Writing in Rome </h3> 
        <img src={require("./media/Screen Shot 2023-02-27 at 2.35.45 AM.png")} style={{width:500}}/>
        <p> Under the leadership of Shawn Wong and Lauren Easterling, for our English 281 course we became travel writers. Professor Wong emphasized this term over "tourists", as tourists venture into new lands in a protected and unchanged manner, but true travelers let the land change their soul. From visiting churches to museums to restaurants, parks, cemeteries, and beaches, I created new memories in Rome that have changed me forever. We cooked for each other, we went exploring together, we all got lost together.</p></div>
        <img src={require("./media/Screen Shot 2023-02-27 at 2.33.19 AM.png")} style={{width:500}}/>
        <img src={require("./media/Screen Shot 2023-02-27 at 2.34.24 AM.png")} style={{width:500}}/>
        

      </Paper>
    </div>
  );
};

const AutumnQ = () => {
  return (
    <div style={card}>
      <Paper style={paperstyle}>
      <div> <h3>Honors 100 </h3>
          
          <p> At the start of autumn quarter, I was thinking about double majoring in potentially neuroscience alongside computer science. Now, I’m not so sure about doing two science majors. Talking to alumni, I’ve found that there are lots of different ways to get involved with brain science labs without being a neuroscience major. In fact, for some of these labs, 
          simply knowing the programming language Java is enough to make you a valuable part of the team. This lifted a lot of weight off my shoulders and I’m going to spend my time exploring classes that exercise my creative side. One thing that surprised me, that I did not expect from UW was how welcoming everyone is. Once you put yourself out there, making friends isn’t so intimidating. This is one thing I really like about the Honors community and that Honors 100 has helped me with: finding friends. I’m excited to create more memories and connections with my peers and build up my portfolio in this way. In Honors 100, I’ve been exposed to the global challenge posed by tech within society. This is definitely something I want 
          to explore more. The global challenges event was very interesting for me because I got to hear about the social justice side of the issue. However, in my Honors CSE 390 class, I got to learn more about the technical side. My CSE 390 teacher, Hunter Schafer, does a great job of explaining how machine learning can lead to racial biases and dangerous feedback loops. I want to dedicate more of my personal time to investigating this topic. Thus, the introduction from Honors 100 really helped with giving me context for this issue before I jumped into the technicality of it with Hunter. By the end of my first year in Honors, I hope to see better how my major 
          intersects with different aspects of my life. First, I saw it’s risks come to life at the Global Challenges event. Now, I want to see ways we can use technology to combat its own dangers. How can it be used in an interdisciplinary way? What are its further applications? For winter quarter, I am taking the honors class Ways of Feeling, and I’m hoping to understand emotions on a deeper level in this class. Then, I could even apply technology to the contents of this class. This way, Honors will have taught me how to see the overlap between different subjects. By the end of my time at UW, I really hope I have explored all the different subjects I have come in curious about. I know I will never get to know everything about everything, but at least at university I have the opportunity to learn as much as I can. It’s kind of like an all-you-can-eat buffet, but there’s just so much food that will never be finished. From art and animation, to astronomy, to neuroscience, from linguistics to psychology, film, law, and 
          economics, there is just so much I want to taste. It's unquenchable thirst but with the help with the Honor’s interdisciplinary approach, I’d like to say I lived my university life to its fullest during these next four years.</p></div>
          </Paper>
    </div>
  );
};

const CSE143 = () => {
  return (
    <div style={card}>
      <Paper style={paperstyle}>
      <div> <h3>Honors Introductory Programming (CSE143)  </h3>
          <p> Weapons of Math Destruction </p>
          <img src={"data:image/png;base64,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"} style={{width:200}}/>
           </div></Paper>
    </div>
  );
};

const MATH125 = () => {
  return (
    <div style={card}>
      <Paper style={paperstyle}>
      <div> <h3>Multivariable Calculus & Getting Covid </h3>
          <p> dying</p> </div></Paper>
    </div>
  );
};

const H212 = () => {
  return (
    <div style={card}>
      <Paper style={paperstyle}>
      <div> <h3>Multivariable Calculus & Getting Covid </h3>
          <p> dying</p> </div></Paper>
    </div>
  );
};



