import React from "react";
import css from "../../../../common/Common.module.css";
import { ColorType } from "../../../../model/types";
import getOpacity from "../../../../utils/getOpacity";
import getRGB from "../../../../utils/getRGB";

type ChangeColorProps = {
  title: string;
  color: ColorType;
};

function ChangeColor({ title, color }: ChangeColorProps) {
  const defaultValueOpacity = getOpacity(color);
  const defaultValueColor = getRGB(color);
  return (
    <div className={css.toolblock}>
      <div className={css.tool}>
        <label htmlFor="bg-color">{title}</label>
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
