import { useState } from 'react'
import Run from './Run.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Run />
    </>
  )
}

export default App
