import * as React from 'react'
import '../styles/global.css'

const fade = () => {
    document.body.animate([{opacity:1},{opacity:.5},{opacity:0},{opacity:1} ],1500)
    setTimeout(()=>window.scroll(0,0), 1000)
    
}

const Footer = () => {
    return (
        <div id="Footer" onClick={()=>fade()}>
            <p style={{marginTop:0, }} >© 2021 Chad Dayton</p>
           <p style={{marginTop:0, marginLeft:'35%'}}><center>Click here to return to the top</center></p>
            </div>
    )
}

export default Footer 