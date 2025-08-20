import { useState } from 'react'
import './App.css'
import NexusOrbSup from './components/Nexusorbsup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center h-screen'>
      <NexusOrbSup />
    </div>
  )
}

export default App
