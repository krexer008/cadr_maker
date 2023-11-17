import React from 'react'
import s from './Header.module.css'
import Menu from './Menu/Menu'

function Header() {
  return (
    <div className={s.header}>
      <Menu />
    </div>
  )
}
export default Header
