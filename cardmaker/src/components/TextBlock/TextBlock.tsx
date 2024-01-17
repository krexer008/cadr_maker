import { useState } from "react";
import css from "./TextBlock.module.css";
import { TextBlockType } from "../../model/types";
import getRGBA from "../../utils/getRGBA";

type textBlockProps = {
  block: TextBlockType;
  /*
    isSelected: boolean,
    onClick: () => void;
    */
};

function TextBlock({ block }: textBlockProps) {
  const {
    id,
    size: { width, height },
    position: { left, top },
    textStyle: {
      fontSize,
      fontFamily,
      fontWeight,
      fontStyle,
      textDecoration,
      color,
    },
  } = block;
  const textStyle = {
    fontSize,
    fontFamily,
    fontWeight,
    fontStyle,
    textDecoration,
    color: getRGBA(color),
  };
  const blockStyle = {
    width,
    height,
    maxWidth: `100%`,
    maxHeight: `100%`,
    minHeight: fontSize * 1.1,
    top,
    left,
  };
  const [value, setValue] = useState(block.value);

  return (
    <div className={css.textblock} style={blockStyle}>
      <textarea
        className={css.textarea}
        style={textStyle}
        value={value}
        placeholder={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        /*
            onClick={onClick}                
            */
      />
    </div>
  );
}
export default TextBlock;
