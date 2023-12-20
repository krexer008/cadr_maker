import React from 'react'
import Button from '../Sidebar_button/Button'
import css from './ImageBlock.module.css'

function ImageBlock() {
  return (
    <div className={css.imageblock}>
      <Button text={'Image Button'} onClick={() => alert('Image clicked')} />
      <div></div>
    </div>
  )
}
export default ImageBlock
