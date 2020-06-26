import React from 'react'
//css
import './Loading.css'
//img
import Img from '../../assets/loading.gif'

function Loading() {
    return (
        <div className='loading'>
            <img src={Img} alt='' />
        </div>
    )
}

export default Loading