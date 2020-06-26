const LOGIN_SIGN_UP_INPUT = 'LOGIN_SIGN_UP_INPUT'
const PASSWORD_SIGN_UP_INPUT = 'PASSWORD_SIGN_UP_INPUT'

let initialState = {
    loginSignUp: '',
    passwordSignUp: ''
}

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SIGN_UP_INPUT:
            return {
                ...state,
                loginSignUp: action.loginSignUp
            }

        case PASSWORD_SIGN_UP_INPUT:
            return {
                ...state,
                passwordSignUp: action.passwordSignUp
            }

        default:
            return state
    }
}

export const LOGIN_SIGN_UP_INPUT_CREATOR = loginSignUp => ({ type: LOGIN_SIGN_UP_INPUT, loginSignUp })
export const PASSWORD_SIGN_UP_INPUT_CREATOR = passwordSignUp => ({ type: PASSWORD_SIGN_UP_INPUT, passwordSignUp })

export default signUpReducer