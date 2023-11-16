import React from 'react'
import './App.css'
import Header from './components/Header/Header'
/*
import Sidebar from './components/Sidebar/Sidebar'
import Work_space from './components/Work_space/Work_space'
*/

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="sidebar">Sidebar</div>
      <div className="workspace">Work_space</div>
    </div>
  )
}
export default App
