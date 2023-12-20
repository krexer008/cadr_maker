import React from 'react'
import css from './App.module.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Work_space from './components/Work_space/Work_space'

const App = () => {
  return (
    <div className={css.app_wrapper}>
      <Header />
      <Sidebar />
      <Work_space />
    </div>
  )
}
export default App
