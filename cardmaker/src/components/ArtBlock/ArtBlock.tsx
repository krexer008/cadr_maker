import React from 'react'
import { ArtBlockType, ArtName } from '../../type/type'
import HeaderButton from '../Header/HeaderButton/HeaderButton'
import css from './ArtBlock.module.css'

type artBlockProps = {
  block: ArtBlockType
}

function ArtBlock() {
  return <div className={css.artblock} id=""></div>
}
export default ArtBlock
