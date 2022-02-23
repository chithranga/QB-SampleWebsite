import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
function HeroSection() {
  return (    
        <div className='hero-container'>
          <video src='/videos/video-2.mp4' autoPlay loop muted />
          <h1>Online Accounting Software for Astronauts</h1>
          <p>Save time and money. We guide you through your software</p>
          <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'             
            >
              PRODUCT DEMO <i className='far fa-play-circle' />
            </Button>
          </div>
        </div>
      );
  
}

export default HeroSection