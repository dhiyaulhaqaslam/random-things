import { useState } from 'react'
import './App.css'
import NexusOrbSup from './components/Nexusorbsup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NexusOrbSup />
    </div>
  )
}

export default App
