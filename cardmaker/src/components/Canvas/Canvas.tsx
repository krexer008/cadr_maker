import React from 'react'
import Button from '../Sidebar_button/Button'
import css from './Canvas.module.css'

function Canvas() {
  return (
    <div className={css.сanvas}>
      <Button text={'Canvas Button'} onClick={() => alert('Canvas clicked')} />
      <div></div>
    </div>
  )
}
export default Canvas
