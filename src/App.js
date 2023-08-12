import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'
import Home from './pages/Home'
// import About from './pages/About'

function App() {
  return (
    <div className="">
      {/* <Header /> */}
      <main className="">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          {/* <Route path="/about" element={<CenterContent />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

function HomeContent() {
  return (
    <div className="">
      <Home />
    </div>
  )
}
function CenterContent() {
  return <Center>{/* <About /> */}</Center>
}

export default App
