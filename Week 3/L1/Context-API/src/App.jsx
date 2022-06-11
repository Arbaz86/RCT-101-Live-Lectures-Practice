import { useContext, useState } from 'react'
import './App.css'
import { Body } from './components/Body'
import { Navbar } from './components/Navbar'
import { ThemeContext } from './contexts/ThemeContext'


function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Body />
    </div>
  )
}

export default App
