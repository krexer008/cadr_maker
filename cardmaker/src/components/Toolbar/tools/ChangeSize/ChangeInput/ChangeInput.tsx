import React from "react";
import css from "../../../../../common/Common.module.css";

type InputProps = {
  text: string;
  defaultValue: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const ChangeInput = ({ text, defaultValue, onChange }: InputProps) => {
  return (
    <div className={css.size}>
      <label htmlFor="canvas-width"> {text} </label>
      <input
        id="canvas-width"
        type="number"
        min="10"
        max="1980"
        step="1"
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default ChangeInput;
