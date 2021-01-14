import React from 'react';

function Home(){

  
  return (
    <div id="home">
      <br/>
      <img src={ require('./../images/logo.png')} />
      <div className="logo-text">
        <h3>Just Do it</h3>
      </div>
    </div>
  );
}

export default Home;
