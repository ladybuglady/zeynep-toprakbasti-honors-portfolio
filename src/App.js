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
          <H212/>
          <CSE340/>
          <Prison/>
          <DXARTS200/>
          <CSE446/>
      </div>
      </div>
      <div ref={resRef} id="research" className="big_nature_box"></div>
      <div ref={lifeRef} id="life" className="big_moon_box"></div>
    </div>
    </div>
  );
}

export default App;

const card = (h) => ({ height: h, width: "600px", margin: "50px" });
const paperstyle = { height: "100%", width: "514px", padding: "30px", color: "gray", fontSize: 12 }

const Rome = () => {
  return (
    <div style={card("1200px")}>
      <Paper style={paperstyle}>
      <div> <h3>Travel Writing in Rome </h3> <h4> Fall 2019 </h4> 
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
    <div style={card("700px")}>
      <Paper style={paperstyle}>
      <div> <h3>Honors 100 - Autumn Quarter Reflection</h3>  <h4> Fall 2019 </h4> 
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
    <div style={card("500px")}>
      <Paper style={paperstyle}>
      <div> <h3>Honors Introductory Programming (CSE142)  </h3>  <h4> Fall 2019 </h4> 
          <img src={"data:image/png;base64,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"} style={{width:200}}/>
           
          <p> CSE142 is the very first programming course I took at UW. For this class, I was enrolled into the Honors section, which means that in addition to completing the course material, I also met once a week with a smaller group to talk about the larger issues within the computing world.
            Our professor had us read "Weapons of Math Destruction" by Cathy O'Neil, a book I felt eloquently showcased the dangers of widely used algorithms if left unchecked. With little coding experience at the time, this book helped me understand how exactly algorithmic biases present themselves and 
            how they can impact society. </p>
          
           
           </div></Paper>
    </div>
  );
};



const H212 = () => {
  return (
    <div style={card("2100px")}>
      <Paper style={paperstyle}>
      <div> <h3>The Middle East Depicted in Graphic Novels (Honors 212) </h3>  <h4> Spring 2020 </h4> 
        <img src={require("./media/IMG_7503.jpg")} style={{width:500}}/>
        <img src={require("./media/IMG_7502[2786].jpg")} style={{width:500}}/>
          <p> This honors class was about how the middle east is shown in western media, and the roots of orientalism. Interweaving art, literature, and history alike, I was invited into an interdisciplinary curriculum that expanded my thinking of cultural zeitgeists birthed through the mediums we consume on a daily basis. 
            Here is an excerpt of an essay I wrote for the class on the importance of graphic novels in shaping our views of the Middle Eastern world:</p> 
            
            
            <div className='essay'> &emsp; &emsp; Evolving from prehistoric cave art to 20th century cartoons, graphic novels demonstrated 
their abilities to become one with the creator: Scholars say that the primary function of cave art 
was religious--it served a very specific goal and was not attuned to the different pieces of the 
artist’s soul. As both culture and art technology changed, we can now see how a more diverse 
set of techniques are employed by comic artists. It is these variety of techniques that define the 
stories, their underlying messages, their biases, their style, and their ability to connect with 
readers. In this class we primarily learned about icons, simplification, timing, perspective, and 
context. Artists employ the use of simplification in their art if they want to weigh the importance 
of their novel on the character as it relates to the reader rather than the art itself. They play 
around with framing to manipulate time and space, and to highlight dramatizations and 
urgencies in their stories. With the appearance of Middle Eastern themes within this genre 
specifically, we have learned that such techniques are truly revealing of the author’s message. 
For example, Persepolis, a story written from the eyes living through the Islamic Revolution, was 
drastically different from a fictional city of magic imagined by a white author in the book 
Ramadan. The comedic hijabi women from Palestine lived on an entirely different planet from 
darkly shaded dull colored soldiers in Waltz with Bashir. Perspective manipulates the story. This 
was the great take away for me in the final project, when I observed that first-hand experiences 
from the Middle East were generally depicted with consistent framing and little exaggerations in 
space and time and line style. On the other hand, stories that did not have intent to document 
an autobiographical situation but rather emphasize the excitement or exoticism of the Middle 
East were accompanied by frames and margins that practically danced on the pages and the 
personalities of the characters ran wild. Frames that covered a large collection of people and 
chaos informed readers of the complexities of the Middle East. Frames that zoomed in on 
characters’ wrinkles and other facial details relieved the tragedies of their stories with dark 
humor. Dark and bold lines were utilized to lend gravity to war images, while light swirls and 
curls represented a royal setting within a supernatural world. From the texture to the angles, the 
lens that the Middle East was depicted from varied tremendously from story to story in this 
class, and perhaps such variety shows that we have a long ways to go before we can agree 
how to serve this theme justice in graphic novels."</div>
            </div></Paper>
    </div>
  );
};

const CSE340 = () => {
  return (
    <div style={card("500px")}>
      <Paper style={paperstyle}>
      <div> <h3> Interaction Programming (CSE340)  </h3> <h4> Spring 2020 </h4> 
      <p> CSE340 was an important class during my freshman year because it felt like a significant leap from my introductory programming classes. 
        In this class, we were taught the foundations of interactive UI and how to design applications accessibly. Below is an example art gallery application
        I built for Android:
      </p>
      <img src={require("./media/doodle.png")} style={{width:500}}/>
           
           </div></Paper>
    </div>
  );
};



const Prison = () => {
  return (
    <div style={card("1200px")}>
      <Paper style={paperstyle}>
      <div> <h3> Prison Systems (Honors 230)  </h3> <h4> Fall 2020 </h4> 
      <p> Honors 230 explored the American Prison Industrial Complex. In this class, I learned about the evolution of prison systems, how they impact communities today, and the influences of the political sphere. 
        </p>
      <img src={require("./media/conceptmap.png")} style={{width:500}}/>
      <img src={require("./media/policing.png")} style={{width:500}}/>
     <p>
        For the final assignment of the project, we had to record a podcast on a topic of our choice. I chose to investigate criticisms of the First Step Act, and how the prison system treats women 
        and specifically women of color.
      </p>
      
      <audio controls="controls"> 
      <source src={require("./media/First Step Act Podcast (Final).mp3")} type="audio/mp3" /> 
      </audio>
           </div></Paper>
    </div>
  );
};

const DXARTS200 = () => {
  return (
    <div style={card("200px")}>
      <Paper style={paperstyle}>
      <div> <h3> Introduction to Digital Art & Experimental Media (DXARTS 200) </h3> <h4> Winter 2021 </h4> 
      <p> During the Winter Quarter of my Sophomore year, I was introduced to the new field of Experimental Media and I instantly fell in love.
        At the intersection of art and technology, the UW's DXARTS program offered me an exciting and novel perspective into combining my two passions.
        I immidiately decided that I wanted to pursue the minor which was open to undergraduates. For the final report, I completed a proposal for a
        fictional project that would utilize concepts we had learned in class.
      </p>
           
           </div></Paper>
    </div>
  );
};


const CSE446 = () => {
  return (
    <div style={card("800px")}>
      <Paper style={paperstyle}>
      <div> <h3> Introduction to Machine Learning (CSE446) </h3> <h4> Spring 2021 </h4> 
      <p> I concluded my sophomore year with an introductory machine learning course. This course is what finally opened the gates of the mysterious world of 
        artificial intelligence for me, and I was hooked. I knew I wanted to spend my time diving deeper into this field of study, so the concepts
        learned in this course became a springboard for me for my research teaching opportunities to come.
      </p>
      <p> While I very much enjoyed the class, it was extremely intensive. The theory sections of the class were much more difficult than the programming and experimental sections.
        I certainly struggled a lot with proving theorems that seemed very abstracted away from reality and whose meaning and applications were less obvious. Ultimately though, machine
        learning is a subject that seems grounded more in experiment. With incomprehinsibly large datasets, the computations that go into complex structures like neural nets are rarely
        predictable (which makes machine learning extremely powerful using Big Data in our current society). 
      </p>
      <p>Below is a screenshot of experimental results from using Principal Component Analysis to sort handwritten numbers. </p>
      <img src={require("./media/Screen Shot 2023-02-28 at 12.54.55 AM.png")} style={{width:500}}/>
           </div></Paper>
    </div>
  );
};




