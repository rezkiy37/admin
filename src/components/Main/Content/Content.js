import React from 'react'
import { Route } from 'react-router-dom'

//css
import './Content.css'

//components
import IntroContainer from './Intro/IntroContainer'

function Content() {
    return (
        <section className='content'>
            <Route path='/'
                render={() => <IntroContainer />} />
        </section>
    )
}

export default Content