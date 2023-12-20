import React from 'react'
import ArtBlock from '../ArtBlock/ArtBlock'
import Canvas from '../Canvas/Canvas'
import ImageBlock from '../ImageBlock/ImageBlock'
import TextBlock from '../TextBlock/TextBlock'
import css from './Sidebar.module.css'

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <ArtBlock />
      <ImageBlock />
      <TextBlock />
      <div></div>
    </div>
  )
}
export default Sidebar
