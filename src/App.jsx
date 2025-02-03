import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CustomCharts from './components/CustomChart'
import Charts1 from './components/Charts1'
import InvertedBulletChart from './components/InvertedBulletChart'
import BarChart from './components/BarChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ }}>
          {/* <Charts/> */}
          {/* <CustomCharts/> */}
          <BarChart/>
          {/* <Charts1/> */}
          {/* <InvertedBulletChart/> */}
      </div>
    </>
  )
}

export default App
