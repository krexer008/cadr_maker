import React from 'react'
import css from './Button.module.css'

type ButtonProps = {
  text: string
  onClick: () => void
}

function Button(props: ButtonProps) {
  return (
    <div className={css.button} onClick={props.onClick}>
      {props.text}
    </div>
  )
}
export default Button
