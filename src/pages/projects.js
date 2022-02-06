import * as React from 'react'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import testImage from '../images/icon.png'

const ProjPage = () =>{
    return(
        <>
        <Navbar/>
        <>
        <div id='hero-container' style={{minHeight:'100%',}}>
        <div className='hero-bg' style={{backgroundRepeat:'repeat-x'}} >
        </div>
        {/* Below Code is Card for RLR */}

        <div className='Herocard' >
            <center> <h2 className='Herocard_text' style={{paddingLeft:0,}}>Red Light Runner</h2>
    {/* <img src={testImage}/> */}
            <p style={{fontSize:'calc(12px + 1vw)',}}>Built with C# and the Unity engine, 
           Red Light Runner is a mobile game in which the player must avoid all the red lights, 
           while continuously gaining speed, and unable to stop.
           </p>
           <br></br>
           <p style={{fontSize:'calc(10px + .5vw)'}}><a href='placeholder.place'>Privacy Policy</a></p>
           </center>
           
          </div>
          </div>
    {/* Below Code is Card for Preppy */}
    <div id='hero-container' style={{height:'73vh'}}>
        <div className='hero-bg' style={{top:'auto', transform:'rotate(180deg)', height:'73vh'}} >
        </div>
          <div className='Herocard' style={{marginTop:'0', right:'0'}} >
    <center> <h2 className='Herocard_text' style={{paddingLeft:0,}}>Preppy</h2>
    {/* <img src={testImage}/> */}
           <p style={{fontSize:'calc(12px + 1vw)',}}>Preppy is a progressive web app 
           that leverages barcodes and device cameras to allow users to easily find 
           new recipes that incorporate ingredients on-hand
           </p>
           <br></br>
           <p style={{fontSize:'calc(10px + .5vw)'}}><a href='placeholder.place'>Privacy Policy</a></p>
           </center>
           
          </div>
            </div>
          </>
        
        </>
    )
}

export default ProjPage