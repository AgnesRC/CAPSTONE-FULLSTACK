import { useEffect } from 'react'
import './App.css'
import Homepage from './pages/Homepage'


function App() {

useEffect(() => {
  async function test() {
    const response = await fetch('http://localhost:3000/')
    const result = await response.json()
    console.log(result);
  }
  test()
}, [])


  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
