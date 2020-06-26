import React from 'react'
import { Route } from 'react-router-dom'
//css
import './Auth.css'

import SignInContainer from './SignIn/SignInContainer'
import SignUpContainer from './SignUp/SignUpContainer'

function Auth() {
    return (
        <section className='auth-container'>
            <Route path='/signin'
                render={() => <SignInContainer />} />
            <Route path='/signup'
                render={() => <SignUpContainer />} />
        </section>
    )
}

export default Auth