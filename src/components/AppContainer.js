import { connect } from 'react-redux'
//components
import App from './App'
import { SIGN_IN_CREATOR } from '../redux/reducers/auth-reducer'


//container Component
let mapStateToProps = (state) => {
    return (
        {

        }
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        SignInHandler: (login, password) => {
            let action = SIGN_IN_CREATOR(login, password)
            dispatch(action)
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer