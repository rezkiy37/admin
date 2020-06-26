import React from 'react'

function Intro({ links, onClick, user }) {

    const addTokenHandler = () => {
        localStorage.setItem('user', 'I am token')
    }
    const removeTokenHandler = () => {
        localStorage.removeItem('user')
    }


    return (
        <div>
            <h1>Intro</h1>
            {links}
            {user}
            <button onClick={() => onClick()}>Add</button>
            <button onClick={addTokenHandler}>add token</button>
            <button onClick={removeTokenHandler}>remove token</button>
        </div>
    )
}

export default Intro