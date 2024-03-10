import * as React from "react";
import BACKGROUNDIMG from  './mainpage-background-image.jpg'
import './MainPage.css'

function MainPage() {
  return (   
      <div className="div">
        <div className="div-2">
          <img className="img"  src={BACKGROUNDIMG}    alt="centered"/>
          <div className="div-3">
            <div className="div-4">Login</div>
            <div className="div-5">Register</div>
          </div>
          <div className="div-6">
            <div className="div-7">GrowGenius</div>
            <div className="div-8">About us</div>
          </div>
        </div>
      </div>
      
    
  );
}

export default MainPage;