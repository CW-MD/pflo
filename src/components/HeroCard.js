import * as React from 'react'
import '../styles/global.css'
import  Typewriter  from 'typewriter-effect';

// let titles = ['Graphic Designer', 'Web Developer', 'Software Engineer'];

// let target = document.getElementById('type-sec')

// var typewriter = TypewriterClass(target,{loop:true})

// for(let elem in titles){
//     typewriter.pauseFor(2500).typeString(elem).pauseFor(500).deleteChars(elem.length)
// }

const HeroCard = () => {
    return (
        <div className='Herocard'>
           <h2 className='Herocard_text'>My name's Chad, and I'm a...</h2>
          
            <Typewriter options={{
                strings:['Graphic Designer', 'Web Developer', 'Software Engineer'],
                autoStart: true,
                loop:true,
                deleteSpeed:8,
                delay:'85',
                pauseFor: 1500
                
        }}/>

         
            {/* <div style={{marginLeft:'20%', marginTop:'-5%',lineHeight:'5rem',  }}>Graphic Designer</div>
            <div style={{marginLeft:'30%', lineHeight:'5rem'}}>Web Developer</div>
            <div style={{marginLeft:'40%', paddingBottom:"100px",lineHeight:'5rem'}}>Software Engineer</div> */}

        </div>

    )
}

export default HeroCard