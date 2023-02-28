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
      <div className="grid2" style={{fontSize: 14}}> 
        <div> <img src={require("./media/me.png")} style={{height:300}}/></div>

        <div><h2>Zeynep Toprakbasti</h2>
        <h3>B.S. in Computer Science, Minor in DXARTS</h3>
        <div  className='essay' > University of Washington Honors Portfolio</div>
        </div>
      </div>
    </div>
  );
}

export default IntroContainer;

