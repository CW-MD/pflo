import * as React from 'react'
import '../styles/global.css'
import  Typewriter  from 'typewriter-effect';


const HeroCard = () => {
    return (
        <div className='Herocard'>
           <h2 className='Herocard_text'>My name's Chad, and I'm a...</h2>
          
            <Typewriter className='Typewriter'  options={{
                strings:['Graphic Designer', 'Web Developer', 'Software Engineer'],
                autoStart: true,
                loop:true,
                deleteSpeed:8,
                delay:'85',
                pauseFor: 1500,
                
        }}/>


        </div>

    )
}

export default HeroCard