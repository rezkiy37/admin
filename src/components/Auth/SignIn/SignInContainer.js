import { connect } from "react-redux"
import SignIn from './SignIn'
import { LOGIN_SIGN_IN_INPUT_CREATOR, PASSWORD_SIGN_IN_INPUT_CREATOR } from "../../../redux/reducers/signIn-reducer"


const mapStateToProps = state => {
    return (
        {
            loginSignIn: state.signInPage.loginSignIn,
            passwordSignIn: state.signInPage.passwordSignIn
        }
    )
}

const mapDispatchToProps = dispatch => {
    return {
        loginSignInChange: value => {
            let action = LOGIN_SIGN_IN_INPUT_CREATOR(value)
            dispatch(action)
        },

        passwordSignInChange: value => {
            let action = PASSWORD_SIGN_IN_INPUT_CREATOR(value)
            dispatch(action)
        }
    }
}

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)

export default SignInContainer