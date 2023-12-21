import React from 'react'
import css from './HeaderButton.module.css'

type headerButtonProps = {
  handler: () => void
  icon: string
  alt: string
}

function HeaderButton({ handler, icon, alt }: headerButtonProps) {
  return (
    <button className={css.button} onClick={handler}>
      <img src={icon} alt={alt} />
    </button>
  )
}
export default HeaderButton
