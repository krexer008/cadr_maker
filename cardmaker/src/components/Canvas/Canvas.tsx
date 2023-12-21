import React from 'react'
import HeaderButton from '../Header/HeaderButton/HeaderButton'
import css from './Canvas.module.css'

function Canvas() {
  return (
    <div className={css.сanvas}>
      <HeaderButton
        text={'Canvas Button'}
        onClick={() => alert('Canvas clicked')}
      />
      <div></div>
    </div>
  )
}
export default Canvas
