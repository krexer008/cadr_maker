import React from "react";
import css from "../../../../common/Common.module.css";

type ChangeColorProps = {
  text: string;
};

function ChangeColor({ text }: ChangeColorProps) {
  const defaultValueOpacity = 1;
  const defaultValueColor = "red";
  return (
    <div className={css.toolblock}>
      <div className={css.tool}>
        <label htmlFor="bg-color">{text}</label>
        <input id="bg-color" type="color" defaultValue={defaultValueColor} />
        <label htmlFor="bg-opacity">Opacity</label>
        <input
          id="bg-opacity"
          type="number"
          min="0"
          max="1"
          step="0.1"
          defaultValue={defaultValueOpacity}
        />
      </div>
    </div>
  );
}

export default ChangeColor;
