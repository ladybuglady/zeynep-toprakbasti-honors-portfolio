import React from 'react';
import './IntroContainer.css';

function IntroContainer() {
  const styles = {
    fontFamily: 'Consolas, sans-serif',
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
        <div style = {styles} className="intro-box-text">ZEYNEP</div>
      </div>
    </div>
  );
}

export default IntroContainer;

