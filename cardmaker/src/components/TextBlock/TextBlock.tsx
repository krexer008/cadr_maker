import React from 'react'
import HeaderButton from '../Header/HeaderButton/HeaderButton'
import css from './TextBlock.module.css'

function TextBlock() {
  return (
    <div className={css.textBlock}>
      <HeaderButton
        text={'Image TextBlock'}
        onClick={() => alert('TextBlock clicked')}
      />
      <div></div>
    </div>
  )
}
export default TextBlock
