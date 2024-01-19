import React from "react";
import css from "../../../../common/Common.module.css";

type SizeProps = {
  handleWidthChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleHeightChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function ChangeSize({ handleWidthChange, handleHeightChange }: SizeProps) {
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
            onChange={handleWidthChange}
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
            onChange={handleHeightChange}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangeSize;
