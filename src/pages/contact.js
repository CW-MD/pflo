import * as React from 'react'
import '../styles/global.css'
import Navbar from '../components/Navbar'
import {AiFillGithub, AiOutlineMail, AiFillLinkedin} from 'react-icons/ai'

//Building out static page as placeholder, will rework into modal popup later

const Contact = () =>{
    return(
        <>
        <Navbar/>
    <div id = 'hero-container'>
    <div className='hero-bg'>
    </div> 
    <div className='Herocard'>
           <h2 className='Herocard_text' style={{paddingLeft:0}}><center>Let's get in touch!</center></h2>
           <p style={{fontSize:'calc(16px + 1vw)',}}><center>Feel free to connect with me on Linkedin, or <br></br>shoot me an email directly</center></p>
           <div style={{marginLeft:0}} className='media_icons'  >
            <a href = 'https://www.github.com/cw-md'><AiFillGithub  /></a>
              <a href = 'https://www.linkedin.com/in/chad-dayton'> <AiFillLinkedin  /> </a>
              <a href = 'mailto:chad@dayton.dev'>  <AiOutlineMail  /> </a>
           </div>
                 
          
            
           
            

                
            </div>
           
    </div>
    
            
           

        
        
        </>
    )
}

export default Contact