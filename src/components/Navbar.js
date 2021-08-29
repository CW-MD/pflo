import * as React from 'react'
import '../styles/global.css'
import { Link } from 'gatsby'
const Navbar = () => {
    return(
        <div className="Navbar">
            
            {/* <a href = '#'>Projects</a> */}
        
           <Link to='/projects/'>Projects</Link>
            <Link to='/'><h1 className='Navbar_header'>Chad{'\n'} Dayton</h1></Link>
           <Link to='/contact/'>Contact</Link>
            
        </div>
    )
}

export default Navbar