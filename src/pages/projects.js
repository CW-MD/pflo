import * as React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import testImage from '../images/icon.png'
import gyreCap from '../images/GyreCap.jpg'
import preppyCap from '../images/preppy_cap.jpg'
import rlrCap from '../images/rlrCap.jpg'
import Footer from '../components/Footer'
import {Link} from 'gatsby'

const ProjPage = () =>{
    return(
        <>
        <Navbar/>
        <>
        {/* Below Code is Card for RLR */}
        <div id='hero-container' style={{minHeight:'100%',}}>
        <div className='hero-bg' style={{backgroundRepeat:'repeat-x'}} >
        </div>

        <div className='Herocard' style={{display:'inline-block', }}>
            <center> <h2 className='Herocard_text' style={{paddingLeft:0,}}>Red Light Runner</h2>
            
            <p style={{fontSize:'calc(12px + 1vw)',paddingLeft:'2%', paddingRight:'2%',marginBottom:'0'}}>Built with C# and the Unity engine, 
           Red Light Runner is a mobile game in which the player must avoid all the red lights, 
           while continuously gaining speed, and unable to stop.
           </p>
          
           <br></br>
           <p style={{fontSize:'calc(10px + .5vw)',}}>
               <Link to='/rlrpp' target= '_blank' rel='noopener noreferrer'>Privacy Policy</Link> <br></br>
               <Link to='/rlrtc' target= '_blank' rel='noopener noreferrer'>Terms & Conditions</Link>
               </p>
           </center>
           
          </div>
          
          </div>
          
    {/* Below Code is Card for Preppy */}
    <div id='hero-container' style={{height:'72vh'}}>
        <div className='hero-bg' style={{top:'auto', transform:'rotate(180deg)', height:'72vh'}} >
        </div>
          <div className='Herocard' style={{marginTop:'0', right:'0'}} >
    <center> <h2 className='Herocard_text' style={{paddingLeft:0,}}><a href='https://preppy-food.web.app/' className='proj_links'>Preppy</a></h2>
    {/* <img src={testImage}/> */}
           <p style={{fontSize:'calc(12px + 1vw)',paddingLeft:'2%', paddingRight:'2%'}}>Preppy is a progressive web app 
           that leverages barcodes and device cameras to allow users to easily find 
           new recipes that incorporate ingredients on-hand
           </p>
           </center>
           
          </div>
            </div>

            <div id='hero-container' style={{height:'72vh'}}>
        <div className='hero-bg' style={{top:'auto', height:'72vh'}} >
        </div>

        <div className='Herocard' style={{marginTop:'0'}}>
            <center> <h2 className='Herocard_text' style={{paddingLeft:0,}}><a href='http://sigma-grace-shopper.herokuapp.com/'className='proj_links' >Gyre</a></h2>
    {/* <img src={testImage}/> */}
            <p style={{fontSize:'calc(12px + 1vw)',paddingLeft:'2%', paddingRight:'2%'}}>Built with Javascript, React, Redux, Node,and Postgresql,
            Gyre is a mock E-Commerce website specializing in the sale of carnival equipment.
           </p>
           </center>
           
          </div>
          </div>
          <Footer/>
          </>
        
        </>
    )
}

export default ProjPage