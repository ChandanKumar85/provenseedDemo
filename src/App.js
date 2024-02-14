import React from 'react'
import Header from './layout/header'
import Footer from './layout/footer'
import AppRoute from './AppRoute'
import Banner from './layout/banner'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AppRoute />
      <Footer />
    </div>
  )
}

export default App
