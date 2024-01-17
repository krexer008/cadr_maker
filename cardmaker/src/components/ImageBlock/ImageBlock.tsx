import React from "react";
import css from "./ImageBlock.module.css";
import { ImageBlockType } from "../../model/types";

type ImageBlockProps = {
  block: ImageBlockType;
};

function ImageBlock({ block }: ImageBlockProps) {
  const {
    size: { width, height },
    position: { left, top },
    image: { data },
  } = block;

  const blockStyle = {
    width,
    height,
    maxWidth: `100%`,
    maxHeight: `100%`,
    top,
    left,
  };

  return (
    <div className={css.container} style={blockStyle}>
      <img
        className={css.image}
        src={data}
        /*
            onClick={onClick}                
            */
      />
    </div>
  );
}
export default ImageBlock;
