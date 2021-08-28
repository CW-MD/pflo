import * as React from 'react'
import '../styles/global.css'
const Navbar = () => {
    return(
        <div className="Navbar">
            
            <a href = '#'>Projects</a>
            <h1 className='Navbar_header'>Chad{'\n'} Dayton</h1>
            <a href='#'>Contact</a>
           
            {/* <a className='Navbar_items' href='/'>Resume </a>
            <a className='Navbar_items' href='/'>Projects </a>
            <a className='Navbar_items' href='/'>Contact </a> */}
        </div>
    )
}

export default Navbar