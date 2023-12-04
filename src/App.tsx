import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import Particle from './components/Particle';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='p-5 border-4 w-full h-full'>
      <Outlet />
    </main>
  )
}

export default App