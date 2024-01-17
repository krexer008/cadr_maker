import React from "react";
import css from "./HeaderButton.module.css";

type headerButtonProps = {
  onClick: () => void; // func
  text: string; // source
  className?: string; // button name
};

function HeaderButton({ onClick, className, text }: headerButtonProps) {
  const classNames = `${css.button} ${className ? className : ""}`;
  return (
    <button className={classNames} type="button" onClick={onClick}>
      {text}
    </button>
  );
}
export default HeaderButton;
