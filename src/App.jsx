import { useState } from 'react'
import './App.css'
import NexusOrb from './components/SparkleIcon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NexusOrb />
    </div>
  )
}

export default App
