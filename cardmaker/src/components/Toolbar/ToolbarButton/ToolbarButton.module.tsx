import React from 'react'
import css from './ToolbarButton.module.css'

type ButtonProps = {
  text: string
  onClick: () => void
}

function ToolbarButton(props: ButtonProps) {
  return (
    <div className={css.button} onClick={props.onClick}>
      {props.text}
    </div>
  )
}
export default ToolbarButton
