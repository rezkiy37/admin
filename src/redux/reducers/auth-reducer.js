const SIGN_IN = 'SIGN_IN'
//const SIGN_UP = 'SIGN_UP'

let initialState = {
    user: [
        {
            login: '',
            password: ''
        }
    ]
}

const authReducer = (state = initialState, action) => {
    let stateCopy

    switch (action.type) {
        case SIGN_IN:
            stateCopy = { ...state }
            stateCopy.user[0] = {
                login: action.login,
                password: action.password,
            }

            return stateCopy

        default:
            return state
    }
}


export const SIGN_IN_CREATOR = (login, password) => ({ type: SIGN_IN, login, password })


export default authReducer
