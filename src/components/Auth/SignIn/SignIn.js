import React from 'react'
import { NavLink } from 'react-router-dom'
import SignUpContainer from '../SignUp/SignUpContainer'



function SignIn({ loginSignIn, passwordSignIn, loginSignInChange, passwordSignInChange }) {

    let login = loginSignIn
    let password = passwordSignIn

    let loginSignInInput = React.createRef()
    let passwordSignInInput = React.createRef()

    const loginChangeHandler = () => {
        let value = loginSignInInput.current.value

        loginSignInChange(value)
    }

    const passwordChangeHandler = () => {
        let value = passwordSignInInput.current.value

        passwordSignInChange(value)
    }

    const signInHandler = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    const signUpHandler = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className='auth-content'>
            <h1>Sign In</h1>

            <div className='auth-form'>
                <input
                    className='auth-input'
                    type='text'
                    value={login}
                    placeholder='login'
                    ref={loginSignInInput}
                    onChange={loginChangeHandler}
                />
                <input
                    className='auth-input'
                    type='text'
                    value={password}
                    placeholder='password'
                    ref={passwordSignInInput}
                    onChange={passwordChangeHandler}
                />

                <div className='auth-btn-box'>
                    <button className='auth-btn' onClick={signUpHandler}>Sign In</button>
                    <NavLink className='auth-btn auth-link' to='/signup'>Sign Up</NavLink>
                </div>
            </div>
        </section>
    )
}

export default SignIn