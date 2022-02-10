import * as React from 'react'
import '../styles/global.css'
import  Typewriter  from 'typewriter-effect';


const HeroCard = () => {
    return (
        <div className='Herocard' >
           <h2 className='Herocard_text' style={{userSelect:'none'}}>My name's Chad, and I'm a...</h2>
          
            <Typewriter className='Typewriter'  options={{
                strings:['Web Developer', 'Software Engineer', 'Security Specialist'],
                autoStart: true,
                loop:true,
                deleteSpeed:8,
                delay:'43',
                pauseFor: 700,
                
        }}/>


        </div>

    )
}

export default HeroCard