import * as React from 'react'
import '../styles/global.css'


// const slideshow = ()=>{

// }


const HeroCard = () => {
    return (
        <div className='Herocard'>
            {/* <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="0,0 200,0 140,50 200,100 0,100" fill="rgba(255, 255, 255, 0.45)" stroke="black" strokeWidth="0" opacity=".7"/>
             </svg>*/}
           <h2 className='Herocard_text'>Chad Dayton</h2>
            <div style={{marginLeft:'20%', marginTop:'-5%',lineHeight:'5rem',  }}>Graphic Designer</div>
            <div style={{marginLeft:'30%', lineHeight:'5rem'}}>Web Developer</div>
            <div style={{marginLeft:'40%', paddingBottom:"100px",lineHeight:'5rem'}}>Software Engineer</div>

        </div>
//         <div>
//         <header>
//   <h1>Header Content</h1>
//   <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
//     <polyline points="100,100 150,25 150,75 200,0" fill="none" stroke="black" />
//     </svg>
// </header>

// <section>
//   <h1>Section Content</h1>
// </section>
// </div>


    )
}

export default HeroCard