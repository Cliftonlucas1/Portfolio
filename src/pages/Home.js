import React from 'react'

// Components
import Header from '../components/Header'
import Center from '../components/Center'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <div flex-grow w-full flex items-center justify-center>
        <Center />
      </div>
      <Footer className="w-8 h-8 flex justify-between" />
    </div>
  )
}

export default Home
