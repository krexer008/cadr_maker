import React from 'react'
import css from './Header.module.css'
import Menu from './Menu/Menu'

function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>Card Maker</div>
      <Menu />
    </div>
  )
}
export default Header
