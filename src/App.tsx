import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AvailableProducts } from './components/AvailableProducts'
import { Cart } from './components/Cart'
import { Total } from './components/Total'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Total/>
      <AvailableProducts/>
      <Cart/>
    </>
  )
}

export default App
