import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'
import Projects from './pages/Projects'
import About from './components/About'

function App() {
  return (
    <div className="">
      <Header />

      <main className="">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projects" element={<CenterContent />} />
          <Route path="/about" element={<AboutContent />} />
        </Routes>
      </main>

      <Footer />
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
  return (
    <div>Project content should be here</div>
    // <Center>
    //   <Projects />
    // </Center>
  )
}

function AboutContent() {
  return (
    // <div>About content should be here</div>
    // <Center>
    <About />
    // </Center>
  )
}
export default App
