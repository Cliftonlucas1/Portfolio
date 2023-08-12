import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Center from './components/Center'
import Home from './pages/Home'
// import './App.css'
// import NotFound from './components/NotFound'; // if you added a NotFound component

function App() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Center />} />
          {/* <Route path="*" element={<NotFound />} /> // catch-all route */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

// A new component that wraps the content of Home page
function HomeContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Home />
      {/* You can reorder or structure these as you see fit */}
    </div>
  )
}

export default App
