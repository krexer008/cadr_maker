import React from 'react'
import HeaderButton from '../Header/HeaderButton/HeaderButton'
import css from './ImageBlock.module.css'

function ImageBlock() {
  return (
    <div className={css.imageblock}>
      <HeaderButton
        text={'Image Button'}
        onClick={() => alert('Image clicked')}
      />
      <div></div>
    </div>
  )
}
export default ImageBlock
