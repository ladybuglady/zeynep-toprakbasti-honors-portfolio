import React from 'react';
import './BlogPost.css';

function BlogPost(img, h, header, text) {
  const styles = {
    fontFamily: 'Andale Mono, sans-serif',
    fontSize: '24px',
    fontWeight: 'light',
    color: 'black',
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'left',
    height: '100'
  };
  return (
    <div className="blogpost">
      <div className="bloggrid2" style={{fontSize: 14}}> 
        <div> <img src={require({img})} style={{height:{h}}}/></div>
        <div><h3>{header}</h3>
        <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;

