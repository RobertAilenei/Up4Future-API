import * as React from "react";
import BACKGROUNDIMG from  './mainpage-background-image.jpg'
import './MainPage.css'

function MainPage() {
  return (   
      <div className="body">
        <div className="content">
          <img className="img"  src={BACKGROUNDIMG}    alt="centered"/>
          <div className="align-buttons">
            <div className="login-button">Login</div>
            <div className="register-button">Register</div>
          </div>
          <div className="growgenius">GrowGenius</div>
          <div className="align-text">
            <div className="growgenius">GrowGenius</div>
            <div className="about-us">About us</div>
          </div>
        </div> 
      </div> 
  );
}

export default MainPage;