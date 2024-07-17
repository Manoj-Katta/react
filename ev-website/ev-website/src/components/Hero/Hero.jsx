import React, { useState } from 'react'
import './Hero.css'
import Background from '../Background/Background';

const Hero = () => {
   
  return (
    <div className='container'>
      <Background 
      playStatus = {playStatus}
      heroCount = {heroCount}>
      </Background>
    </div>
  )
}

export default Hero
