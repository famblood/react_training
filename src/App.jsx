import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestrParent from './components/TestrParent'
import { Link, Route, Routes, Router, BrowserRouter } from 'react-router-dom'
import Pokedex from './components/Pokedex'

function App() {
  let dataT = ["money", "lift partner", "happiness", "hope"]
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link style={{ padding: 5 }} to='/'>HOME</Link>
          <Link style={{ padding: 5 }} to='/LIFT'>LIFT</Link>
        </nav>
        <Routes>
          <Route path='/LIFT' element={<TestrParent item={dataT}></TestrParent>}></Route>
          <Route path="/" element={<Pokedex></Pokedex>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
