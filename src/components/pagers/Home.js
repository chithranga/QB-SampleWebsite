import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import SignUp from './SignUp';

function Home() {
  return (
    <>
    <HeroSection/>
    <Cards/> 
    <SignUp/>
    </>
  )
}

export default Home