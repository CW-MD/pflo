import * as React from 'react'
import Navbar from '../components/Navbar'
import HeroCard from '../components/HeroCard'
import Aboutme from '../components/Aboutme'
import Slideshow from '../components/Slideshow'
import Prof from '../components/Prof'




const MainPage = ()=>{
  return(
    <>
    <Navbar/>
    <div id = 'hero-container'>
    <div className='hero-bg'>
    </div> 
   <HeroCard>
    
</HeroCard>
   
    </div>
    <Aboutme/>
    <Prof/>
    
    </>
    
  )
}

export default MainPage