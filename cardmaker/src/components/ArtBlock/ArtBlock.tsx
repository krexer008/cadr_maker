import React from 'react'
import Button from '../Sidebar_button/Button'
import css from './ArtBlock.module.css'

function ArtBlock() {
  return (
    <div className={css.sidebar}>
      <Button text={'ArtBlockButton'} onClick={() => alert('button clicked')} />
      <div></div>
    </div>
  )
}
export default ArtBlock
