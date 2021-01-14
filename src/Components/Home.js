import React from 'react';

function Home(){

  
  return (
    <div id="home">
      <br/>
      <div className="logo-image">
      <img src={ require('./../images/logo.png')} /><br/>
      </div>
      {/* <div className="logo-text">
        <h3>Just Do it</h3>
      </div> */}
    </div>
  );
}

export default Home;
