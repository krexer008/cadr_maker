import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Work_space from './components/Work_space/Work_space'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Work_space />
    </div>
  )
}
export default App
