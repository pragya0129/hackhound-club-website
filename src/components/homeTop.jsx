import React from 'react'
import '../css/homeTop.css'
import Typewriter from 'typewriter-effect';
// import starBG from '../assets/stars.jpg'

import Particle from './Particle'

export default function homeTop() {
  
  return (
    <>
    <div class="particlejs-top">
        <Particle/>
        <div className='heading'>
        <Typewriter 
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("HACKHOUND CLUB SRM-IST ")
       .start();
       }}
       />
        </div>
    </div>
    </>
    
  )
}
