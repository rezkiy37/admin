import React from 'react'
import { NavLink } from 'react-router-dom'

//css
import './Navbar.css'

//components
import IntroContainer from '../Main/Content/Intro/IntroContainer'


function Navbar() {
    return (
        <nav className='navbar'>
            <NavLink
                className='navbar-link'
                to='/'
            >
                Intro
            </NavLink>

            <NavLink
                className='navbar-link'
                to='/'
            >
                Second
            </NavLink>

            <NavLink
                className='navbar-link'
                to='/'
            >
                Third
            </NavLink>
        </nav>
    )
}

export default Navbar