import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Charts from './components/Charts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: 'flex' , alignItems: 'center' }}>
          <Charts/>
      </div>
    </>
  )
}

export default App
