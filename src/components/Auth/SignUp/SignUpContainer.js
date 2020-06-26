import { connect } from "react-redux"
import SignUp from './SignUp'
import { LOGIN_SIGN_UP_INPUT_CREATOR, PASSWORD_SIGN_UP_INPUT_CREATOR } from "../../../redux/reducers/signUp-reducer"


const mapStateToProps = state => {
    return (
        {
            loginSignUp: state.signUpPage.loginSignUp,
            passwordSignUp: state.signUpPage.passwordSignUp
        }
    )
}

const mapDispatchToProps = dispatch => {
    return {
        loginSignUpChange: value => {
            let action = LOGIN_SIGN_UP_INPUT_CREATOR(value)
            dispatch(action)
        },

        passwordSignUpChange: value => {
            let action = PASSWORD_SIGN_UP_INPUT_CREATOR(value)
            dispatch(action)
        }
    }
}

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp)

export default SignUpContainer