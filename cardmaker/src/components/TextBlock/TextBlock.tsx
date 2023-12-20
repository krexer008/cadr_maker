import React from 'react'
import Button from '../Sidebar_button/Button'
import css from './TextBlock.module.css'

function TextBlock() {
  return (
    <div className={css.textBlock}>
      <Button text={'TextBlock'} onClick={() => alert('TextBlock')} />
      <div></div>
    </div>
  )
}
export default TextBlock
