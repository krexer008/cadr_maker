import React from 'react'
import Canvas from '../Canvas/Canvas'
import Button from '../Sidebar_button/Button'
import css from './Header.module.css'
import Menu from './Menu/Menu'
//import Menu from './Menu/Menu'

function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>Card Maker</div>
      <Menu />
      <Canvas />
      {/*<Menu />*/}
    </div>
  )
}
export default Header
