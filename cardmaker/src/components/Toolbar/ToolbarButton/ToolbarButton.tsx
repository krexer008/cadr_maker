import React from "react";
import css from "./ToolbarButton.module.css";

type toolbarButtonProps = {
  handler: () => void; // func
  icon: string; // source
  alt: string; // button name
};

function ToolbarButton({ handler, icon, alt }: toolbarButtonProps) {
  return (
    <button className={css.button} onClick={handler}>
      <img src={icon} alt={alt} />
    </button>
  );
}
export default ToolbarButton;
