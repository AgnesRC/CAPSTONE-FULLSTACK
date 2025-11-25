import { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import Homepage from './pages/Homepage'
import ProjectsPage from './pages/ProjectsPage'


function App() {

useEffect(() => {
  async function test() {
    const response = await fetch(`http://localhost:3000`)
    const result = await response.json()
    console.log(result);
  }
  test()
}, [])



  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </>
  )
}

export default App
