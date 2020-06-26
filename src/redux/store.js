import { combineReducers, createStore } from "redux"
import mainReducer from "./reducers/main-reducer"
import authReducer from "./reducers/auth-reducer"
import signInReducer from "./reducers/signIn-reducer"
import signUpReducer from "./reducers/signUp-reducer"



const reducers = combineReducers({
    signIn: authReducer,
    mainPage: mainReducer,
    signInPage: signInReducer,
    signUpPage: signUpReducer,
})

let store = createStore(reducers)

window.store = store

export default store