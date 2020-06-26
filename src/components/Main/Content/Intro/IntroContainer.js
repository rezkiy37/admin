import React from 'react'
//
import { connect } from 'react-redux'
import Intro from './Intro'
import { LINK_CREATOR } from '../../../../redux/reducers/main-reducer'


//container Component
const mapStateToProps = (state) => {
    return (
        {
            links: state.mainPage.links.map(link => <p>{link.title}{link.link}</p>),
            user: state.signIn.user.map(user => <p>{user.login}{user.password}</p>)
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            let action = LINK_CREATOR()
            dispatch(action)
        }
    }
}

const IntroContainer = connect(mapStateToProps, mapDispatchToProps)(Intro)

export default IntroContainer