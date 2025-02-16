import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import SignupCard from './Pages/SignupCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignupCard/>
    </>
  )
}

export default App
