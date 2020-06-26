import React from 'react'
import { NavLink } from 'react-router-dom'

//css
import './Header.css'
import IntroContainer from '../Main/Content/Intro/IntroContainer'

function Header() {
    return (
        <header className='header section'>
            <h1 className='header-title'>Admin</h1>
            <nav className='header-nav'>
                <NavLink
                    className='header-link'
                    to='/'
                >
                    Home
                </NavLink>

                <NavLink
                    className='header-link'
                    to='/'
                >
                    Second
                </NavLink>

                <NavLink
                    className='header-link'
                    to='/'
                >
                    Third
                </NavLink>
            </nav>
        </header>
    )
}

export default Header