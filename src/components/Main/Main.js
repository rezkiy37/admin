import React from 'react'

//css
import './Main.css'

//components
import Navbar from '../Navbar/Navbar'
import Content from './Content/Content'

function Main() {
    return (
        <main className='main'>
            <Navbar />

            <Content />
        </main>
    )
}

export default Main