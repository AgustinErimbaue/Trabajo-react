import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='Navbar'>
        <h1 className='title'>El 10</h1>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Como llegar?</a></li>
        </ul>
    </nav>
  )
}

export default Navbar