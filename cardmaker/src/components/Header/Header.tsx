import React from 'react'
import ArtBlock from '../ArtBlock/ArtBlock'
import Canvas from '../Canvas/Canvas'
import ImageBlock from '../ImageBlock/ImageBlock'
import TextBlock from '../TextBlock/TextBlock'
import css from './Header.module.css'
import Menu from './Menu/Menu'

function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo}>Card Maker</div>
      <Menu />
      <Canvas />
      <ImageBlock />
      <TextBlock />
      <ArtBlock />
    </div>
  )
}
export default Header
