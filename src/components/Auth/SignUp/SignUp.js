import React from 'react'
import { NavLink } from 'react-router-dom'
import SignInContainer from '../SignIn/SignInContainer'


function SignUp({ loginSignUp, passwordSignUp, loginSignUpChange, passwordSignUpChange }) {

    let login = loginSignUp
    let password = passwordSignUp

    let loginSignUpInput = React.createRef()
    let passwordSignUpInput = React.createRef()

    const loginChangeHandler = () => {
        let value = loginSignUpInput.current.value

        loginSignUpChange(value)
    }

    const passwordChangeHandler = () => {
        let value = passwordSignUpInput.current.value

        passwordSignUpChange(value)
    }

    const signUpHandler = async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className='auth-content'>
            <h1>Sign Up</h1>

            <div className='auth-form'>
                <input
                    className='auth-input'
                    type='text'
                    value={login}
                    placeholder='login'
                    ref={loginSignUpInput}
                    onChange={loginChangeHandler}
                />
                <input
                    className='auth-input'
                    type='text'
                    value={password}
                    placeholder='password'
                    ref={passwordSignUpInput}
                    onChange={passwordChangeHandler}
                />

                <div className='auth-btn-box'>
                    <button className='auth-btn' onClick={signUpHandler}>Sign Up</button>
                    <NavLink className='auth-btn auth-link' to='/signin'>Sign In</NavLink>
                </div>
            </div>
        </section>
    )
}

export default SignUp