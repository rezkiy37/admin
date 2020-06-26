const LOGIN_SIGN_IN_INPUT = 'LOGIN_SIGN_IN_INPUT'
const PASSWORD_SIGN_IN_INPUT = 'PASSWORD_SIGN_IN_INPUT'

let initialState = {
    loginSignIn: '',
    passwordSignIn: ''
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SIGN_IN_INPUT:
            return {
                ...state,
                loginSignIn: action.loginSignIn
            }

        case PASSWORD_SIGN_IN_INPUT:
            return {
                ...state,
                passwordSignIn: action.passwordSignIn
            }

        default:
            return state
    }
}

export const LOGIN_SIGN_IN_INPUT_CREATOR = loginSignIn => ({ type: LOGIN_SIGN_IN_INPUT, loginSignIn })
export const PASSWORD_SIGN_IN_INPUT_CREATOR = passwordSignIn => ({ type: PASSWORD_SIGN_IN_INPUT, passwordSignIn })

export default signInReducer