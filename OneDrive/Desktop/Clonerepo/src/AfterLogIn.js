import React from 'react';
import './AfterLogIn.css'
import BACKGROUNDIMG from  './afterlogin-background-image.jpeg'
const AfterLogIn = () => {
  return (
    <div>
      
      <div className='title-page'>
        GrowGenius
      </div>
      
      <div className='align-textbox'>
      <img className="img"  src={BACKGROUNDIMG} ali   alt="centered"/>
        <div className='align-description'>
          <div>
            <div className='announcement'>Announcement</div>
            <div className='reserve-meeting'>Reserve a meeting</div>
            <div className='calculate-loans'>Calculate loans</div>
          </div>
          <div className='container'>
            <div className='growgenius-text'>
            GrowGenius este un site dezvoltat 
            de echipa TeamUp4Future care are ca si scop 
            indrumarea antreprenorilor care se afla la inceput de drum si cauta un sfat pentru dezvoltarea unei afaceri.</div>
            </div>
          </div>
        </div>
    </div>

  );
};

export default AfterLogIn;