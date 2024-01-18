import React, { useState } from "react";
import css from "../../../../common/Common.module.css";
import { Size } from "../../../../model/types";

type SizeProps = {
  size: Size;
};

function ChangeSize({ size }: SizeProps) {
  const [valueWidth, setValueWidth] = useState(size.width);
  const [valueHeight, setValueHeight] = useState(size.height);

  const handlerChangeValueWidth = (value: string) => {
    setValueHeight(Number(value));
    size.width = valueWidth;
  };

  const handlerChangeValueHeight = (value: string) => {
    setValueWidth(Number(value));
    size.height = valueHeight;
  };

  return (
    <div className={css.tool}>
      <div className={css.toolblock}>
        <label>Canvas Size</label>
        <div className={css.size}>
          <label htmlFor="canvas-width">Width </label>
          <input
            id="canvas-width"
            type="number"
            min="10"
            max="1980"
            step="1"
            defaultValue={size.width}
            onChange={(e) => handlerChangeValueWidth(e.target.value)}
          />
        </div>
        <div className={css.size}>
          <label htmlFor="canvas-height">Height </label>
          <input
            id="canvas-height"
            type="number"
            min="10"
            max="1080"
            step="1"
            defaultValue={size.height}
            onChange={(e) => handlerChangeValueHeight(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangeSize;
