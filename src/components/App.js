import React, { useEffect, useState, useCallback } from 'react'

//styles
import './App.css'

//components
import Auth from './Auth/Auth'
import Loading from './Loading/Loading'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'


function App({ SignInHandler }) {
  const [loading, setLoading] = useState(false)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    const user = localStorage.getItem('user')

    setLoading(false)

    if (user) {
      setIsUser(true)

      SignInHandler(user, 'pass')

    } else {
      setIsUser(true)
    }

  }, [])



  if (loading) {
    return (
      <div className='appContainer'>
        <Loading />
      </div>
    )
  }

  if (!isUser) {
    return (
      <div className='appContainer'>
        <Auth />
      </div>
    )
  }

  return (
    <div className='appContainer'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App