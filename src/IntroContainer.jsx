import { useEffect, useState } from 'react';
import './intro-styles.css';


function Introduction() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <div className="intro-container">
      <div
        className={`box ${showBox ? 'show' : ''}`}
        onAnimationEnd={() => setShowBox(false)}
      >
        <h1>ZEYNEP</h1>
      </div>
    </div>
  );
}

