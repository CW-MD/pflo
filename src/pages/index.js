import * as React from 'react'
import Navbar from '../components/Navbar'
import HeroCard from '../components/HeroCard'
import Aboutme from '../components/Aboutme'

const MainPage = ()=>{
  return(
    <>
    <Navbar/>
    <div className = 'hero-container'>
    <div className='hero-bg'>
    </div> 
   <HeroCard/>
    </div>
    <Aboutme/>
    <div className="Prof">
    
    </div>
    </>
  )
}

export default MainPage