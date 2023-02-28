import React from 'react';
import './IntroContainer.css';

function IntroContainer() {
  const styles = {
    fontFamily: 'Andale Mono, sans-serif',
    fontSize: '24px',
    fontWeight: 'light',
    color: 'black',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    height: '100'
  };
  return (
    <div className="intro-container">
      <div className="intro-box">
        <div className="intro-box-line"></div>
       
        <div style = {styles} className="intro-box-text">
          <div className="grid"> 
            <div><h5>Zeynep Toprakbasti</h5>
            <h7>University of Washington Honors Portfolio</h7>
            <h8>B.S. in Computer Science, Minor in DXARTS</h8></div>

            <div> <img src={require("./media/me.png")} style={{height:500}}/></div>

          
          </div>
          
          
          
          </div>
      </div>
    </div>
  );
}

export default IntroContainer;

