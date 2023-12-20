import React from 'react'
import ArtBlock from '../ArtBlock/ArtBlock'
import Canvas from '../Canvas/Canvas'
import ImageBlock from '../ImageBlock/ImageBlock'
import TextBlock from '../TextBlock/TextBlock'
import css from './Toolbar.module.css'

function Toolbar() {
  return (
    <div className={css.toolbar}>
      <ArtBlock />
      <ImageBlock />
      <TextBlock />
      <div></div>
    </div>
  )
}
export default Toolbar
