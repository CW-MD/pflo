import * as React from 'react'
import '../styles/global.css'
const Navbar = () => {
    return(
        <div className="Navbar">
            <div>
            <h1 className='Navbar_header'>Chad{'\n'} Dayton</h1>
            </div>
            <a className='Navbar_items' href='/'>Resume </a>
            <a className='Navbar_items' href='/'>Projects </a>
            <a className='Navbar_items' href='/'>Contact </a>
        </div>
    )
}

export default Navbar