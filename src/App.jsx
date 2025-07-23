import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topdashboard from './components/TopDashboard'
import Sideheader from './components/Sideheader'
import Middlesection from './components/Middlesection'

function App() {
  return (
    <>
    <div class="bg-gray-100 font-sans">
   <div class="flex h-screen">
    <Sideheader class="w-1/4 bg-white"></Sideheader>     
    <div class="flex flex-col w-3/4">
      <Topdashboard class="h-1/2 bg-blue-100"></Topdashboard> 
      <Middlesection class="h-1/2 bg-green-100"></Middlesection>
    </div>
  </div>
  </div>
    </>
  )
}

export default App
